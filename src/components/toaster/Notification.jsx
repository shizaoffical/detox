import React from 'react';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css'; // Import toastr CSS
import './Toastr.css'; // Import custom CSS

const names = [
  "Ali", "Abbas", "Abid", "Abrar", "Adam", "Adeel", "Adil", "Afzal", "Afzaal", "Ahmed", "Ahmer", "Ahsan", "Ajmal", "Akbar", "Akhtar", "Akif",
  "Akram", "Aqeel", "Aqib", "Aleem", "Altaf", "Amin", "Amir", "Amjad", "Anwar", "Aon", "Arif", "Arsalan", "Arshad", "Asad", "Asim", "Aslam", "Ayaaz",
  "Ayub", "Azam", "Azeem", "Azhar", "Aziz", "Babar", "Badar", "Bashir", "Danial", "Danish", "Dawood", "Ehtisham", "Fahad", "Faisal", "Faiz", "Farid",
  "Farooq", "Farrukh", "Fawad", "Fayaz", "Fazal", "Ghafoor", "Ghayoor", "Ghous", "Hasan", "Hussain", "Habib", "Hafeez", "Haider", "Hamid", "Hameed",
  "Haroon", "Harris", "Humayun", "Ibrahim", "Idrees", "Iftikhar", "Ijaz", "Ilyas", "Imran", "Inzamam", "Iqbal", "Irfan", "Ishaq", "Ismail", "Jabbar",
  "Jafar", "Jalal", "Jaleel", "Jamal", "Jameel", "Junaid", "Javid", "Jawad", "Kabir", "Kaleem", "Kareem", "Khalid", "Khurshid", "Khushal", "Mohammad",
  "Mohammed", "Mahmood", "Majid", "Maqsood", "Masood", "Mehr", "Mohsin", "Mubashar", "Mudassar", "Mujtaba", "Mumtaz", "Munawar", "Murtaza", "Musharraf",
  "Mushtaq", "Mustafa", "Mustansar", "Muzaffar", "Nabeel", "Nadeem", "Naeem", "Nafees", "Najib", "Nasir", "Naseer", "Nauman", "Naveed", "Nawaz", "Obaid",
  "Omar", "Pervaiz", "Qadir", "Qais", "Qaiser", "Qasim", "Quddus", "Raza", "Raees", "Rahim", "Rehman", "Rameez", "Rashid", "Rasheed", "Rauf", "Razzaq",
  "Riaz", "Rizwan", "Saad", "Saadat", "Sabir", "Sadaqat", "Sadiq", "Saeed", "Safdar", "Safeer", "Saghar", "Sagheer", "Sahir", "Saif", "Sajid", "Sajjad",
  "Saqib", "Salahuddin", "Salim", "Salman", "Sarfraz", "Sarmad", "Sarwar", "Sattar", "Saqlain", "Saud", "Shabbir", "Shafqat", "Shafiq", "Shahbaz",
  "Shahid", "Shahzad", "Shakeel", "Shakir", "Shakoor", "Shamsher", "Shams", "Shan", "Sharjeel", "Shaukat", "Sheharyar", "Sher", "Sheraz", "Shoaib",
  "Shuja", "Shujaat", "Sibtain", "Siddiq", "Sikandar", "Sohaib", "Sohail", "Sohrab", "Suleman", "Sultan", "Tabraiz", "Taha", "Tahir", "Taimur", "Taj",
  "Tajammul", "Talat", "Tanvir", "Tariq", "Taufiq", "Tauqir", "Tauseef", "Tehsin", "Tufail", "Umair", "Umar", "Usman", "Uzair", "Vakeel", "Vazir", "Waheed",
  "Waheed", "Wahid", "Wajid", "Wakeel", "Wali", "Waqar", "Wasi", "Wasif", "Wasim", "Wazir", "Yahya", "Yar", "Yasin", "Yasir", "Yawar", "Younis", "Yousuf",
  "Zaeem", "Zafa", "Zaheer", "Zahid", "Zahoor", "Zaighum", "Zain", "Zakaria", "Zakir", "Zaman", "Zameer", "Zarar", "Zareef", "Zeeshan", "Zia", "Zohaib",
  "Zohair", "Zubair", "Zulfiqar", "Zulqarnain"
];

const cities = [
  "Karachi", "Lahore", "Faisalabad", "Rawalpindi", "Multan", "Gujranwala", "Hyderabad", "Peshawar", "Islamabad", "Quetta", "Sargodha",
  "Sialkot", "Bahawalpur", "Sukkur", "Kandhkot", "Shekhupura", "Mardan", "Gujrat", "Larkana", "Kasur", "Rahim Yar Khan",
  "Sahiwal", "Okara", "Dera Ghazi Khan", "Chiniot", "Nawabshah", "Jhelum", "Hafizabad", "Shikarpur", "Khanpur", "Gojra",
  "Abbottabad", "Jaranwala", "Khairpur", "Dera Ismail Khan", "Nowshera", "Wazirabad", "Swabi", "Chakwal", "Mianwali", "Vihari", "Farooka", "Kot Adu",
  "Tando Adam", "Kamalia", "Ahmadpur East", "Daska", "Chishtian", "Khuzdar", "Pakpattan", "Muridke", "Bahawalnagar",
  "Sadiqabad", "Khanewal", "Burewala", "Kamoke"
];

const packageTypes = [
  "Right Detox Package 1",
  "Right Detox Package 2",
  "Right Detox Package 3"
];

const times = [
  "1 minute ago",
  "2 minutes ago",
  "3 minutes ago",
  "4 minutes ago",
  "5 minutes ago",
  "6 minutes ago",
  "1 day ago",
  "2 days ago",
  "3 days ago"
];

// Function to show toastr notification
function notify(name, city, packageType, time) {
    toastr.clear(); // Clear existing toastr notifications
    toastr.success(
        `${packageType}<br><small id="number">${time}</small>`,
        `${name} in ${city} purchased.`
    );
}

// React component for generating notifications
function Notification() {
    React.useEffect(() => {
        toastr.options = {
            closeButton: true,
            debug: false,
            newestOnTop: false,
            progressBar: true,
            positionClass: "toast-bottom-left",
            preventDuplicates: true, 
            onclick: null,
            extendedTimeOut: 0, 
            showEasing: "swing",
            hideEasing: "linear",
            showMethod: "fadeIn",
            hideMethod: "fadeOut",
            onHidden: () => {
                setTimeout(generateNextNotification, 10000); 
            }
        };

        let nameIndex = 0;
        let cityIndex = 0;
        let packageTypeIndex = 0;
        let timeIndex = 0;

        function generateNextNotification() {
            notify(names[nameIndex], cities[cityIndex], packageTypes[packageTypeIndex], times[timeIndex]);
            nameIndex = (nameIndex + 1) % names.length;
            cityIndex = (cityIndex + 1) % cities.length;
            packageTypeIndex = (packageTypeIndex + 1) % packageTypes.length;
            timeIndex = (timeIndex + 1) % times.length;
        }

        generateNextNotification();
    }, []);

    return null;
}

export default Notification;
