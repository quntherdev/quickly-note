-- -----------------------------------------------------------------------------
--             Génération d'une base de données pour
--                      Oracle Version 10g
--                        (6/3/2023 22:39:05)
-- -----------------------------------------------------------------------------
--      Nom de la base : quicklynote.
--      Projet : Espace de travail
--      Auteur : LRY
--      Date de dernière modification : 6/3/2023 22:38:50
-- -----------------------------------------------------------------------------

DROP TABLE NOTES CASCADE CONSTRAINTS;

DROP TABLE NOTES_GROUP CASCADE CONSTRAINTS;


-- -----------------------------------------------------------------------------
--       TABLE : NOTES
-- -----------------------------------------------------------------------------

CREATE TABLE NOTES
   (
    NOTES_ID NUMBER(2)  NOT NULL,
    GRP_ID NUMBER(2)  NULL,
    NOTES_LABEL CLOB  NULL
,   CONSTRAINT PK_NOTES PRIMARY KEY (NOTES_ID)  
   ) ;

-- -----------------------------------------------------------------------------
--       INDEX DE LA TABLE NOTES
-- -----------------------------------------------------------------------------

CREATE  INDEX I_FK_NOTES_NOTES_GROUP
     ON NOTES (GRP_ID ASC)
    ;

-- -----------------------------------------------------------------------------
--       TABLE : NOTES_GROUP
-- -----------------------------------------------------------------------------

CREATE TABLE NOTES_GROUP
   (
    GRP_ID NUMBER(2)  NOT NULL,
    GRP_ID_CONTAIN_GROUP NUMBER(2)  NULL,
    GRP_LABEL CLOB  NULL
,   CONSTRAINT PK_NOTES_GROUP PRIMARY KEY (GRP_ID)  
   ) ;

-- -----------------------------------------------------------------------------
--       INDEX DE LA TABLE NOTES_GROUP
-- -----------------------------------------------------------------------------

CREATE  INDEX I_FK_NOTES_GROUP_NOTES_GROUP
     ON NOTES_GROUP (GRP_ID_CONTAIN_GROUP ASC)
    ;


-- -----------------------------------------------------------------------------
--       CREATION DES REFERENCES DE TABLE
-- -----------------------------------------------------------------------------


ALTER TABLE NOTES ADD (
     CONSTRAINT FK_NOTES_NOTES_GROUP
          FOREIGN KEY (GRP_ID)
               REFERENCES NOTES_GROUP (GRP_ID))   ;

ALTER TABLE NOTES_GROUP ADD (
     CONSTRAINT FK_NOTES_GROUP_NOTES_GROUP
          FOREIGN KEY (GRP_ID_CONTAIN_GROUP)
               REFERENCES NOTES_GROUP (GRP_ID))   ;


-- -----------------------------------------------------------------------------
--                FIN DE GENERATION
-- -----------------------------------------------------------------------------