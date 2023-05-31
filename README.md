# visa-appointment-alerter
Periodically refreshes the US Visa NIV page to check for open appointments and alerts if one is available

Steps : 
1. Go to [US Visa website for Canada](https://ais.usvisa-info.com/en-ca/niv/users/sign_in) and create a New Account. 
    * It is recommended that you create a new account for this and not use your existing one, as the system will block this account after a few hours]
2. Create a dummy applicant / applicant group with the exact number of participants you need an interview for
    * The initial selection of what kind of applicant are you should have the correct answer
    * You can enter Dummy Names, Passports, DS-160 (formatting needs to be correct) if you want.
    * Visa Class needs to be input correctly, as different visa classes have different interview slot openings
3. Once applicant/applicant group is created, you should see it oin the Home Page along with a Continue button. Click on it.
4. Click on `Pay Visa Fee` which should take you to a page with URL format - https://ais.usvisa-info.com/en-ca/niv/schedule/12345678/payment
    * You will need this URL in the next steps

5. Install [Tampermonkey extension](https://www.tampermonkey.net/) for your browser. 
    * There are other similar extensions like GreaseMonkey that would work as well, basically any extension that easily allows you to run custom user scripts on your browser
6. Now, navigate back to the Payment URL and click on the Tampermonkey extension icon
7. Click on Create a New Script
8. Copy the code from Visa Interview Alerter.js file and replace [url in line 7](https://github.com/rishavgoel14/visa-appointment-alerter/blob/develop/Visa%20Interview%20Alerter.js#L7) with your payment URL from step 4 
