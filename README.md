# Express.js Route Handler: Sensitive Information Leak

This repository demonstrates a common error in Express.js route handlers: improper error handling that can lead to sensitive information leakage. The bug involves sending the entire error object to the client, potentially revealing database connection details or other sensitive data.

The `bug.js` file contains the erroneous code, while `bugSolution.js` provides a corrected version with proper error handling.

## Bug

The primary issue is in the `/users/:id` route.  If an error occurs during database interaction, the error object (which might contain sensitive details) is sent directly to the client in the response.

## Solution

The solution involves using a more robust error handling strategy. Instead of directly sending the error object, the corrected code logs the error for debugging purposes and sends a generic error response to the client without disclosing sensitive details.