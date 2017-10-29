DROP TABLE pokemon CASCADE;
DROP TABLE tiers;
DROP FUNCTION update_position();

CREATE TABLE pokemon(
    id             serial PRIMARY KEY,
    number         integer NOT NULL,
    name           char(100) NOT NULL,
    position       integer NOT NULL,
    description    char(500) NOT NULL,
    tier_fk        integer    NOT NULL
);
CREATE TABLE tiers(
    id            serial PRIMARY KEY,
    name          char(100) NOT NULL
);

CREATE OR REPLACE FUNCTION update_position()
RETURNS trigger AS '
BEGIN
    update pokemon
    set position = position + 1
    where position > new.position - 1;
RETURN NEW;
END' LANGUAGE 'plpgsql'
;

CREATE TRIGGER update_position
BEFORE INSERT ON pokemon
FOR EACH ROW
EXECUTE PROCEDURE update_position();

INSERT INTO tiers(name) VALUES('fuck triggers');
INSERT INTO pokemon(number, name, position, description, tier_fk) VALUES (1, 'asaur', 1, 'asaur description', 1);
INSERT INTO pokemon(number, name, position, description, tier_fk) VALUES (2, 'bsaur', 1, 'bsaur description', 1);
INSERT INTO pokemon(number, name, position, description, tier_fk) VALUES (3, 'csaur', 1, 'csaur description', 1);
INSERT INTO pokemon(number, name, position, description, tier_fk) VALUES (4, 'dsaur', 1, 'dsaur description', 1);
INSERT INTO pokemon(number, name, position, description, tier_fk) VALUES (5, 'esaur', 1, 'esaur description', 1);
