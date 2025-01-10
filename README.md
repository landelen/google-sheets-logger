# SETUP
```
git clone https://github.com/landelen/google-sheets-logger
cd google-sheets-logger
npm install
```
## Create .env file in backend directory and fill in the following field
```
DB_HOST=""
DB_PORT=
DB_USERNAME=""
DB_PASSWORD=""
DB_NAME=""

SMTP_HOST = ""
MAIL_USER = ""
MAIL_PASS = ""

EMAIL_TO=""
EMAIL_FROM=""
```
## Add this script to your google sheets and in the webhookUrl variable add the server address: your_link/webhook
```
function onEdit(e) {
  var sheet = e.source.getActiveSheet();
  var range = e.range;
  var newValue = e.value;
  var oldValue = e.oldValue || ''; 

  var cell = range.getA1Notation();

  var user = Session.getActiveUser().getEmail(); 

  var payload = {
    'cell': cell,
    'oldValue': oldValue,
    'newValue': newValue,
    'sheetName': sheet.getName(),
    'timestamp': new Date().toISOString(),
    'editedBy': user 
  };

  var webhookUrl = "";

  var options = {
    'method': 'post',
    'contentType': 'application/json',
    'payload': JSON.stringify(payload)
  };

  UrlFetchApp.fetch(webhookUrl, options);
}
```
# START
```
npm run start
```
