# BE-Sichere-Benutzerregistrierung-und-Login

## Was du tun wirst

In dieser Übungsaufgabe wirst du eine Node.js-Anwendung entwickeln, um eine einfache Benutzerregistrierungs- und Login-Funktionalität zu implementieren. Du wirst das Tool express-generator (ohne View-Engine) verwenden, um das Projekt zu initialisieren. Als Datenbank wirst du MongoDB verwenden.

## Aufgaben

### Task 1: Projekt initialisieren

Verwende das express-generator-Tool, um ein neues Express-Projekt ohne View-Engine zu erstellen. Nenne das Projekt "user-authentication". Gehe sicher, dass du die Option `--no-view` verwendest, um auf eine View-Engine zu verzichten.

### Task 2: Abhängigkeiten installieren

Navigiere in das Projektverzeichnis und installiere die erforderlichen Abhängigkeiten. Stelle sicher, dass du die neuesten Versionen von express, mongoose und bcrypt verwendest.

### Task 3: MongoDB verbinden

Öffne die Datei `app.js` im Hauptverzeichnis des Projekts. Importiere mongoose in dieser Datei und stelle eine Verbindung zur MongoDB-Datenbank her. Überprüfe, ob die Verbindung erfolgreich hergestellt wurde.

### Task 4: Benutzer-Schema und Modell erstellen

Erstelle eine Datei `user.schema.js` und definiere darin das Benutzer-Schema mit den erforderlichen Feldern: Benutzername, E-Mail-Adresse und Passwort. Verwende dabei mongoose.

Erstelle eine weitere Datei `user.model.js` und importiere das Benutzer-Schema. Erstelle mit Hilfe des Schemas das Benutzer-Modell.

### Task 5: Registrierungsrouten implementieren

Erstelle eine POST-Route `/users/signup`, die es Benutzern ermöglicht, sich zu registrieren. Die Route sollte Benutzername, E-Mail-Adresse und Passwort als Anforderungsparameter erhalten. Implementiere die Validierung der Eingabedaten und speichere den Benutzer in der Datenbank. Verwende bcrypt, um das Passwort zu hashen, bevor du es in der Datenbank speicherst.

### Task 6: Login-Routen implementieren

Erstelle eine POST-Route `/users/login`, die es Benutzern ermöglicht, sich einzuloggen. Die Route sollte Benutzername und Passwort als Anforderungsparameter erhalten. Überprüfe die eingegebenen Anmeldeinformationen mit den in der Datenbank gespeicherten Daten und sende eine Erfolgsmeldung zurück, wenn die Anmeldeinformationen korrekt sind, oder eine Fehlermeldung, wenn sie falsch sind.

## Hinweise

- Achte darauf, den Code in Module zu organisieren und die besten Praktiken für die Code-Strukturierung zu beachten.
- Du kannst die offizielle Dokumentation von express-generator, express, mongoose und bcrypt für weitere Informationen zur Verwendung und Implementierung konsultieren.
- Verwende geeignete Middleware, um die Anforderungsparameter zu validieren und die Datenbankverbindung herzustellen.

Viel Erfolg bei der Implementierung der Benutzerregistrierungs- und Login-Funktionalität in deiner Node.js-Anwendung!
