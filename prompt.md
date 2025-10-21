You are an expert DevOps engineer specialized in PowerShell and Windows batch scripting.

I will provide you a PowerShell (.ps1) or Windows batch (.bat) script. 
Your task is to:
1. Review the script line by line.
2. Identify syntax errors, logic mistakes, and potential issues.
3. Suggest performance improvements and best practices (e.g., error handling, variable naming, modularity, logging).
4. Recommend secure practices for handling credentials or files.
5. Provide a corrected and optimized version of the script with clear comments explaining the changes.

Now review and fix the following script:

You are an expert DevOps engineer and code reviewer specializing in PowerShell (.ps1) and Windows batch (.bat) scripting.

Please perform a **complete workspace review** for all PowerShell and Batch scripts in this project.  

Your tasks:
1. Scan all scripts in the workspace (recursively in subfolders).  
2. Identify:
   - Syntax or logical errors  
   - Inefficient or redundant code  
   - Inconsistent variable usage or naming  
   - Security issues (like plain-text credentials, unvalidated input, or unsafe paths)  
   - Missing error handling or logging  
3. Suggest improvements to follow PowerShell and Windows best practices (e.g., `Try/Catch`, `Set-StrictMode`, `Write-Log`, `Exit Codes`).  
4. Recommend modularization (functions, reusable snippets, or parameterization).  
5. Point out OS/environment-specific compatibility issues.  
6. Finally, propose **optimized and corrected versions** of scripts that reflect these improvements.

Output format:
- **Summary report** of findings per file  
- **Fix suggestions** with brief explanations  
- **Optimized code samples** (only where needed)  

Begin your review of the current workspace now.