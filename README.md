# 🌐 Sahkarya – Bridging Citizens & Authorities

**Sahkarya** is an advanced web-based application designed to **bridge the communication gap between citizens and local authorities**. It enhances civic problem reporting and resolution through **smart forms, real-time maps, powerful analytics**, and **IoT-based automatic problem detection**.

From **fire emergencies to sanitation issues**, Sahkarya enables instant alerts, quick action, and efficient management—making cities smarter and more responsive.

---

### 🚀 Features

- ✅ **Smart Complaint Portal**  
  Citizens can report issues with **images**, **precise map location**, and issue categories in just a few clicks.

- 🔧 **IoT-Enabled Smart Detection**  
  Real-time alerts from embedded sensors reduce reliance on manual reporting and help in **proactive problem management**.

- 📍 **Live Mapping & Tracking**  
  Map-based visualization for citizens and administrators to monitor issues as they unfold.

- 📊 **Insightful Admin Dashboard**  
  Real-time data, issue filters, visual analytics, and responsive controls for fast resolution.

- ⚡ **Lightning-fast Response Coordination**  
  Integrated with local departments for **automatic routing of IoT alerts**, improving emergency response times.

---

### 🖼️ Screenshots

#### 📌 Homepage

<img width="1436" alt="Homepage Screenshot" src="https://github.com/Sahkarya/Sahkarya/assets/90198169/da596ddb-c278-46d3-8490-5ec35c3babf9">

---

#### 📝 Concern Form

![concern](./images/concern.png)

---

#### 🛠️ Admin Panel

<img alt="Admin Panel" src="https://github.com/Sahkarya/Sahkarya/assets/90198169/13c25590-b414-4f6b-a5c4-9ee0156fb7aa">

---

### 🔌 IoT Hardware Integration – Real-time Smart Alerts

Sahkarya integrates **three core IoT systems** that directly send emergency alerts to the appropriate municipal departments. These hardware setups serve as Sahkarya’s most powerful features in the smart city ecosystem.

---

#### 🔥 1. Fire Alarm with Location Ping

- **Purpose**: Detects fire/smoke in public buildings or streets.
- **Technology**: Flame sensor + GSM/WiFi module.
- **Alert Flow**:
  - Fire is detected by the sensor.
  - Coordinates and building ID are sent to **nearest Fire Station Dashboard**.
  - Admin receives a red alert with location on map.

![Fire Alarm Setup](./images/fire%20alarm.jpeg)

---

#### 🗑️ 2. Smart Dustbin Full Alert

- **Purpose**: Automatically detects when a public dustbin is full.
- **Technology**: Ultrasonic sensor + ESP32 + WiFi.
- **Alert Flow**:
  - Bin reaches capacity → alert is triggered.
  - Ping is sent to the **Municipality Admin Panel** with location.
  - Issue is displayed on map with garbage icon.

 
![Smart Dustbin Setup](./images/waste%20management.jpeg)

---

#### 💧 3. Water Pipeline Leakage Detection

- **Purpose**: Detects pressure loss or leaks in water pipelines.
- **Technology**: Flow sensor + pressure sensor + ESP module.
- **Alert Flow**:
  - Leak or abnormal pressure change detected.
  - Coordinates and water line ID sent to **PWD Department**.
  - Leak visualized on map in admin panel for fast dispatch.

📷 *Add image of leakage detection setup here:*  
![Leak Detection Setup](./images/Water%20leakage.jpeg)

---

### 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS  
- **Backend**: Node.js, Express  
- **Database**: MongoDB  
- **IoT Communication**: MQTT / HTTP using ESP32/ESP8266  
- **Maps**: Google Maps API / Leaflet  
- **Deployment**: Vercel / Railway / Nginx

---

### 📌 Ideal Use Cases

- **Smart Cities**
- **Municipal Corporations**
- **College/School Campuses**
- **Villages with Smart Panchayat Plans**
- **Public Health and Disaster Management Systems**

---

### 🧪 Local Setup

```bash
# Clone the repo
git clone https://github.com/Sahkarya/Sahkarya.git
cd Sahkarya

# Install frontend and backend dependencies
cd client && npm install
cd ../server && npm install

# Run backend and frontend servers
npm start    # backend
npm run dev     # frontend (in a new terminal)