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

## License
This project is open-source and available under the [MIT License](LICENSE).
