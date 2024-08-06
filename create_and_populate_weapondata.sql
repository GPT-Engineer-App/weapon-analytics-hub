-- Create the weapondata table
CREATE TABLE weapondata (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(50) NOT NULL,
    power INTEGER NOT NULL,
    element VARCHAR(50) NOT NULL
);

-- Insert sample data
INSERT INTO weapondata (name, type, power, element) VALUES
('The Last Word', 'Hand Cannon', 1350, 'Kinetic'),
('Gjallarhorn', 'Rocket Launcher', 1360, 'Solar'),
('Riskrunner', 'Submachine Gun', 1340, 'Arc'),
('Telesto', 'Fusion Rifle', 1350, 'Void'),
('Ace of Spades', 'Hand Cannon', 1350, 'Kinetic'),
('Thorn', 'Hand Cannon', 1350, 'Kinetic'),
('Thunderlord', 'Machine Gun', 1360, 'Arc'),
('Whisper of the Worm', 'Sniper Rifle', 1350, 'Solar'),
('Outbreak Perfected', 'Pulse Rifle', 1350, 'Kinetic'),
('Witherhoard', 'Grenade Launcher', 1350, 'Kinetic'),
('Anarchy', 'Grenade Launcher', 1360, 'Arc'),
('Izanagi''s Burden', 'Sniper Rifle', 1350, 'Kinetic'),
('Divinity', 'Trace Rifle', 1350, 'Arc'),
('Xenophage', 'Machine Gun', 1360, 'Solar'),
('The Lament', 'Sword', 1360, 'Solar'),
('Cloudstrike', 'Sniper Rifle', 1350, 'Arc'),
('Deathbringer', 'Rocket Launcher', 1360, 'Void'),
('Eriana''s Vow', 'Hand Cannon', 1350, 'Solar'),
('Bastion', 'Fusion Rifle', 1350, 'Kinetic'),
('Ruinous Effigy', 'Trace Rifle', 1350, 'Void');
