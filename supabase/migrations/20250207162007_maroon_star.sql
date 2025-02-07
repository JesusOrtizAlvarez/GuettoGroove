/*
  # Initial Schema Setup for Guetto Groove

  1. New Tables
    - users (extends auth.users)
      - id (uuid, primary key)
      - full_name (text)
      - avatar_url (text)
      - role (text)
      - created_at (timestamp)
      - updated_at (timestamp)

    - events
      - id (uuid, primary key)
      - title (text)
      - description (text)
      - date (timestamp)
      - location (text)
      - price (numeric)
      - capacity (integer)
      - image_url (text)
      - status (text)
      - created_at (timestamp)
      - updated_at (timestamp)

    - artists
      - id (uuid, primary key)
      - name (text)
      - bio (text)
      - image_url (text)
      - instagram_url (text)
      - soundcloud_url (text)
      - created_at (timestamp)
      - updated_at (timestamp)

    - event_artists
      - event_id (uuid, foreign key)
      - artist_id (uuid, foreign key)
      - created_at (timestamp)

    - tickets
      - id (uuid, primary key)
      - event_id (uuid, foreign key)
      - user_id (uuid, foreign key)
      - qr_code (text)
      - status (text)
      - created_at (timestamp)
      - updated_at (timestamp)

    - gallery_images
      - id (uuid, primary key)
      - event_id (uuid, foreign key)
      - image_url (text)
      - created_at (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated and admin users
*/

-- Create custom types
CREATE TYPE user_role AS ENUM ('user', 'admin');
CREATE TYPE event_status AS ENUM ('draft', 'published', 'cancelled', 'finished');
CREATE TYPE ticket_status AS ENUM ('active', 'used', 'cancelled');

-- Create users table that extends auth.users
CREATE TABLE users (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name text,
  avatar_url text,
  role user_role DEFAULT 'user'::user_role,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create events table
CREATE TABLE events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  date timestamptz NOT NULL,
  location text NOT NULL,
  price numeric NOT NULL CHECK (price >= 0),
  capacity integer NOT NULL CHECK (capacity > 0),
  image_url text,
  status event_status DEFAULT 'draft'::event_status,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create artists table
CREATE TABLE artists (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  bio text,
  image_url text,
  instagram_url text,
  soundcloud_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create event_artists junction table
CREATE TABLE event_artists (
  event_id uuid REFERENCES events(id) ON DELETE CASCADE,
  artist_id uuid REFERENCES artists(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  PRIMARY KEY (event_id, artist_id)
);

-- Create tickets table
CREATE TABLE tickets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id uuid REFERENCES events(id) ON DELETE CASCADE,
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  qr_code text NOT NULL UNIQUE,
  status ticket_status DEFAULT 'active'::ticket_status,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create gallery_images table
CREATE TABLE gallery_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id uuid REFERENCES events(id) ON DELETE CASCADE,
  image_url text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE artists ENABLE ROW LEVEL SECURITY;
ALTER TABLE event_artists ENABLE ROW LEVEL SECURITY;
ALTER TABLE tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_images ENABLE ROW LEVEL SECURITY;

-- Create policies for users table
CREATE POLICY "Users can view their own profile"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON users
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- Create policies for events table
CREATE POLICY "Anyone can view published events"
  ON events
  FOR SELECT
  TO anon, authenticated
  USING (status = 'published');

CREATE POLICY "Admins can manage events"
  ON events
  FOR ALL
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM users
    WHERE users.id = auth.uid()
    AND users.role = 'admin'
  ));

-- Create policies for artists table
CREATE POLICY "Anyone can view artists"
  ON artists
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Admins can manage artists"
  ON artists
  FOR ALL
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM users
    WHERE users.id = auth.uid()
    AND users.role = 'admin'
  ));

-- Create policies for event_artists table
CREATE POLICY "Anyone can view event artists"
  ON event_artists
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Admins can manage event artists"
  ON event_artists
  FOR ALL
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM users
    WHERE users.id = auth.uid()
    AND users.role = 'admin'
  ));

-- Create policies for tickets table
CREATE POLICY "Users can view their own tickets"
  ON tickets
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can purchase tickets"
  ON tickets
  FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Admins can manage all tickets"
  ON tickets
  FOR ALL
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM users
    WHERE users.id = auth.uid()
    AND users.role = 'admin'
  ));

-- Create policies for gallery_images table
CREATE POLICY "Anyone can view gallery images"
  ON gallery_images
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Admins can manage gallery images"
  ON gallery_images
  FOR ALL
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM users
    WHERE users.id = auth.uid()
    AND users.role = 'admin'
  ));

-- Create functions and triggers
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER update_users_updated_at
  BEFORE UPDATE ON users
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_events_updated_at
  BEFORE UPDATE ON events
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_artists_updated_at
  BEFORE UPDATE ON artists
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_tickets_updated_at
  BEFORE UPDATE ON tickets
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();