# AI-Based Role & Access Governance Manager on Google Cloud Platform (GCP)

## Overview
This project implements an AI-powered Role & Access Governance Manager on GCP. It ensures continuous IAM role and permission analysis, enforces a least-privilege access model, automates permission revocation, detects risky access patterns, and provides a dashboard for governance.

---

## Key Features
1. **Continuous IAM Role & Permission Analysis**
   - Analyze IAM roles and permissions across GCP projects.
   - Detect excessive permissions and unused roles.
2. **Least-Privilege Access Model**
   - Suggest minimal required permissions for users and services.
3. **Automated Permission Revocation**
   - Automatically revoke unused or excessive permissions.
4. **Risky Access Pattern Detection**
   - Use AI/ML to detect and alert admins about risky access patterns.
5. **Dashboard & Reporting**
   - Provide a React-based dashboard for admins to view insights and take action.
6. **Audit Logging**
   - Log all changes and actions for compliance and auditing.

---

## Architecture

### 1. **Frontend: React.js**
- Dashboard for admins to view insights, manage permissions, and receive alerts.

### 2. **Backend: Python (Flask/Django/FastAPI)**
- REST API to handle requests, interact with GCP services, and process AI/ML models.

### 3. **AI/ML Layer**
- Train and deploy models for detecting excessive permissions and risky access patterns.

### 4. **GCP Services**
- **IAM & Policy Analyzer:** Analyze IAM roles and permissions.
- **Cloud Logging:** Monitor and log access patterns.
- **Cloud Functions:** Automate permission revocation and alerts.
- **BigQuery:** Store and analyze large datasets for AI/ML.
- **Pub/Sub:** Handle event-driven notifications (e.g., alerts).
- **Cloud Storage:** Store audit logs and reports.
- **AI Platform:** Train and deploy ML models.

---

## Implementation Steps

### 1. **Frontend (React.js)**
#### a. Dashboard:
   - Display IAM roles, permissions, and recommendations.
   - Show alerts for risky access patterns.
   - Allow admins to approve/reject permission changes.

#### b. Components:
   - Role & Permission Viewer.
   - Risk Alerts Panel.
   - Audit Logs Viewer.
   - Reports & Analytics.

### 2. **Backend (Python)**
#### a. Framework: Flask/Django/FastAPI
#### b. Endpoints:
   - `/analyze-roles`: Analyze IAM roles and permissions.
   - `/suggest-least-privilege`: Suggest least-privilege access.
   - `/revoke-permissions`: Automatically revoke unused permissions.
   - `/detect-risky-access`: Detect and alert risky access patterns.
   - `/audit-logs`: Fetch audit logs for compliance.

#### c. GCP Integration:
   - Use `google-cloud-iam` and `google-cloud-logging` libraries to interact with GCP services.
   - Use `google-cloud-bigquery` for data analysis.
   - Use `google-cloud-pubsub` for event-driven alerts.

### 3. **AI/ML Layer**
#### a. Data Collection:
   - Collect IAM role and permission data using GCP IAM API.
   - Collect access logs using Cloud Logging.
#### b. Model Training:
   - Train a model to detect excessive permissions using historical data.
   - Train a model to detect risky access patterns using anomaly detection techniques.
#### c. Model Deployment:
   - Deploy models on GCP AI Platform.
   - Use Cloud Functions to trigger model predictions.

### 4. **GCP Services**
- **IAM & Policy Analyzer:** Continuously analyze IAM roles and permissions.
- **Cloud Logging:** Monitor access patterns and log events.
- **Cloud Functions:** Automate permission revocation and send alerts via Pub/Sub.
- **BigQuery:** Store and analyze large datasets for AI/ML.
- **Pub/Sub:** Handle event-driven notifications (e.g., alerts).
- **Cloud Storage:** Store audit logs and reports.
- **AI Platform:** Train and deploy ML models.

---

## Additional Features
1. **Multi-Cloud Support**: Extend the system to support AWS and Azure.
2. **Compliance Reporting**: Generate compliance reports for standards like GDPR, HIPAA, etc.
3. **User Behavior Analytics**: Analyze user behavior to detect insider threats.
4. **Integration with SIEM**: Integrate with Security Information and Event Management (SIEM) tools.

---

## Production Deployment

### 1. **Containerization**
- Use Docker to containerize the frontend and backend.

### 2. **Orchestration**
- Use Kubernetes (GKE) for orchestration.

### 3. **CI/CD Pipeline**
- Set up CI/CD using Cloud Build.

### 4. **Monitoring**
- Use Cloud Monitoring and Cloud Logging for observability.

### 5. **Security**
- Use Secret Manager for sensitive data.
- Enable IAM policies for least-privilege access.

---

## Creating Roles

### **Option 1: Using Google Cloud Console**
1. Go to the Google Cloud Console.
2. Navigate to **IAM & Admin > Roles**.
3. Click **Create Role**.
4. Enter a **Role Name** (e.g., `custom.role1`).
5. Add permissions to the role (e.g., `storage.buckets.get`, `storage.buckets.list`).
6. Click **Create**.

### **Option 2: Using gcloud CLI**
#### a. Install Google Cloud SDK (if not already installed).
#### b. Authenticate with your Google account:
```sh
gcloud auth login
```
#### c. Create a custom role:
```sh
gcloud iam roles create custom_role1 --project=YOUR_PROJECT_ID \
    --title="Custom Role 1" \
    --description="A custom role with limited permissions" \
    --permissions=storage.buckets.get,storage.buckets.list

gcloud iam roles create custom_role2 --project=YOUR_PROJECT_ID \
    --title="Custom Role 2" \
    --description="Another custom role" \
    --permissions=compute.instances.get,compute.instances.list
```

---

## Project Presentation
[PPT Link](https://docs.google.com/presentation/d/1KxUEVBypbE04nBdfsOThnoZ39ryZWX3skrAd6Yi_GIk/edit#slide=id.p1)

---

## Real-World Consequences of Poor IAM Management

### 1. **Data Breaches Due to Excessive Permissions**
**Example: Capital One Breach (2019)**  
**What Happened**: A former AWS employee exploited a misconfigured web application firewall (WAF) to gain unauthorized access to Capital One’s cloud storage.  
**Consequences**:
- Over **100 million** customer records were exposed.
- Capital One faced an **$80 million fine** and reputational damage.  
**How Our Solution Helps**:
- Automatically detects and revokes excessive permissions.
- Enforces the principle of least privilege to minimize attack surfaces.

### 2. **Insider Threats and Unused Permissions**
**Example: Tesla Insider Threat (2018)**  
**What Happened**: A disgruntled employee with unused administrative privileges sabotaged Tesla’s operations by leaking sensitive data and injecting malicious code.  
**Consequences**:
- Tesla suffered **millions of dollars** in damages.
**How Our Solution Helps**:
- Identifies and revokes unused permissions automatically.
- Alerts admins about suspicious activities in real-time.

### 3. **Compliance Violations and Penalties**
**Example: British Airways GDPR Fine (2018)**  
**What Happened**: British Airways suffered a data breach due to weak access controls.  
**Consequences**:
- British Airways was fined **£20 million** under GDPR.
**How Our Solution Helps**:
- Automates compliance reporting and auditing.
- Ensures adherence to GDPR, HIPAA, and SOC 2.

### 4. **Cloud Misconfigurations Leading to Data Exposure**
**Example: Accenture Misconfigured S3 Buckets (2017)**  
**What Happened**: Accenture left four AWS S3 buckets publicly accessible, exposing **137GB of sensitive data**.  
**Consequences**:
- Significant reputational damage and loss of customer trust.
**How Our Solution Helps**:
- Continuously monitors IAM roles for misconfigurations.
- Provides real-time alerts for risky access patterns.

### 5. **Ransomware Attacks Due to Weak Access Controls**
**Example: Colonial Pipeline Ransomware Attack (2021)**  
**What Happened**: Attackers gained access via a compromised VPN account with excessive permissions.  
**Consequences**:
- **$4.4 million** ransom was paid.
- Widespread fuel shortages occurred.
**How Our Solution Helps**:
- Enforces least-privilege access.
- Integrates with MFA and other security measures.

### 6. **Unauthorized Access to Sensitive Data**
**Example: Facebook-Cambridge Analytica Scandal (2018)**  
**What Happened**: A third-party app harvested data from **87 million Facebook users**.  
**Consequences**:
- Facebook faced a **$5 billion fine**.
- Raised global debates on data privacy.
**How Our Solution Helps**:
- Restricts access to sensitive data based on least privilege.
- Provides real-time monitoring and alerts.

### 7. **Operational Disruptions Due to Human Error**
**Example: Google Cloud Outage (2019)**  
**What Happened**: A misconfiguration in IAM roles led to a **4-hour global outage**.
**Consequences**:
- Services like YouTube, Gmail, and Snapchat were disrupted.
**How Our Solution Helps**:
- Automates IAM role and permission management to reduce human error.
- Provides real-time insights and recommendations.

---

## License
This project is open-source and available under the [MIT License](LICENSE).
