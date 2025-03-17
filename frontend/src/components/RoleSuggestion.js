import React, { useState, useContext } from 'react';
import { Input, Button, List, message } from 'antd';
import axios from 'axios';
import ApiContext from '../ApiContext';

const RoleSuggestion = () => {
  const apiUrl = useContext(ApiContext);
  const [requirement, setRequirement] = useState('');
  const [suggestedRoles, setSuggestedRoles] = useState([]);
  const [userEmail, setUserEmail] = useState('');

  const handleSuggestRoles = async () => {
    if (!requirement) {
      message.error('Please enter your requirement');
      return;
    }

    try {
      const response = await axios.post(`${apiUrl}/suggest-roles`, { requirement });
      setSuggestedRoles(response.data.suggested_roles);
    } catch (error) {
      message.error('Failed to fetch role suggestions');
    }
  };

  const handleAssignRole = async (role) => {
    if (!userEmail) {
      message.error('Please enter the user email');
      return;
    }

    try {
      const response = await axios.post(`${apiUrl}/assign-role`, { user_email: userEmail, role });
      message.success(response.data.message);
    } catch (error) {
      message.error('Failed to assign role');
    }
  };

  return (
    <div style={{ padding: '24px' }}>
      <h1>Role Suggestion</h1>
      <Input
        placeholder="Enter your access requirement (e.g., 'I need read-only access to storage')"
        value={requirement}
        onChange={(e) => setRequirement(e.target.value)}
        style={{ marginBottom: '16px' }}
      />
      <Button type="primary" onClick={handleSuggestRoles}>
        Suggest Roles
      </Button>

      {suggestedRoles.length > 0 && (
        <div style={{ marginTop: '24px' }}>
          <h2>Suggested Roles</h2>
          <List
            dataSource={suggestedRoles}
            renderItem={(role) => (
              <List.Item>
                {role}
                <Input
                  placeholder="Enter user email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  style={{ width: '200px', marginLeft: '16px' }}
                />
                <Button type="primary" onClick={() => handleAssignRole(role)}>
                  Assign Role
                </Button>
              </List.Item>
            )}
          />
        </div>
      )}
    </div>
  );
};

export default RoleSuggestion;