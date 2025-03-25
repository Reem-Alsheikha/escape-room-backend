# escape-room-backend

Dieses Backend verwaltet das Escape Room Buchungssystem. Es ermöglicht:
- Buchungen erstellen, abrufen & löschen 
- Kundenverwaltung 
- Raumverwaltung 
- MongoDB-Datenbankanbindung

# Installation & Setup

1- Voraussetzungen : 
        - Node.js
        - MongoDB

2-  Projekt klonen & Abhängigkeiten installieren

-  git clone https://gitlab.rz.htw-berlin.de/s0591458/escape-room.git

- npm install

3- .env-Datei 

#  Starten des Backends :

- Starte das Backend mit:
 npm start

- Falls Port 5000 bereits belegt ist, kann man ihn freigeben mit:
 npx kill-port 5000

# API Endpoints :

1- Kundenverwaltung (customerRoutes.js)
Methode	-----Endpoint-----------Beschreibung
 GET --------/customers --------Alle Kunden abrufen
 POST -------/customers	--------Neuen Kunden erstellen
DELETE -------/customers/:id ---	Kunden löschen

2- Raumverwaltung (roomRoutes.js)​
Methode-------Endpoint---Beschreibung
GET---------/rooms--------Alle Räume abrufen
POST-------/rooms--------Neuen Raum hinzufügen
DELETE-----/rooms/:id-----Raum löschen

3-Buchungen (bookingRoutes.js)​
Methode----Endpoint-----Beschreibung
GET--------/bookings-----Alle Buchungen abrufen
POST-------/bookings-----Neue Buchung erstellen
DELETE------/bookings/:id---Buchung stornieren

# Datenbankmodelle (MongoDB)
- Booking.js
- Customer.js
- Room.js

# Wichtige Dateien

 Datei----------Beschreibung

- server.js------Startet den Express-Server
- .env-----------Konfigurationsdatei (Port & MongoDB)
- routes/	-------Enthält alle API-Routen (bookingRoutes.js, customerRoutes.js, roomRoutes.js)
- models/	--------Definiert die Datenbank-Modelle (Booking.js, Customer.js, Room.js)


# Autor & Kontakt

 Erstellt von: Reema Alsheikha
 E-Mail: reemalsheikha5@gmail.com
