import React from "react";

const Filters = ({
    selectedRole,
    experience,
    jobTypes,
    minSalary,
    companySearch,
    handleRoleChange,
    handleExperienceChange,
    handleJobTypeChange,
    handleMinSalaryChange,
    handleCompanySearchChange
}) => {
    return (
        <div className="dropdown-container">
               
                <select value={selectedRole} onChange={handleRoleChange}>
                    <option value="">Select Role</option>
                    <optgroup label="ENGINEERING">
                        <option value="backend">Backend</option>
                        <option value="frontend">Frontend</option>
                        <option value="tech lead">Tech Lead</option>
                        <option value="android">Android</option>
                        <option value="ios">IOS</option>
                        <option value="dev-ops">Dev-Ops</option>
                        <option value="data engineer">Data Engineer</option>
                        <option value="computer vision">Computer vision</option>
                        <option value="nlp">Nlp</option>
                        <option value="deep learning">Deep-Leaning</option>
                        <option value="test/qa">Test/Qa</option>
                        <option value="web3">web3</option>
                        <option value="sre">Sre</option>
                        <option value="dat infrastructure">Data Infrastructure</option>
                        
                    </optgroup>
                    <optgroup label="DESIGN">
                        <option value="designer">Designer</option>
                        <option value="designmanager">Design Manager</option>
                        <option value="graphicdesigner">Graphic Designer</option>
                        <option value="productdesigner">Product Designer</option>
                    </optgroup>
                    <optgroup label="PRODUCT">
                        <option value="product manager">Product Manager </option>
                        
                    </optgroup>
                    <optgroup label="OPERATIONS">
                        <option value="operations manager">Operations Manager </option>
                        <option value="founders office/cheif of staff">Founder's Office / Cheif Staff </option>
                    </optgroup>
                    <optgroup label="Sales">
                        <option value="salesdevelopmentrepresentative">Sales Development Representative</option>
                        <option value="accountexecutive">Account Executive</option>
                        <option value="accountmanager">Account Manager</option>
                    </optgroup>
                    <optgroup label="Marketing">
                        <option value="digitalmarketing">Digital Marketing</option>
                        <option value="growthhacker">Growth Hacker</option>
                        <option value="marketing">Marketing</option>
                        <option value="productmarketingmanager">Product Marketing Manager</option>
                    </optgroup>
                    <optgroup label="Other Engineering">
                        <option value="hardware">Hardware</option>
                        <option value="mechanical">Mechanical</option>
                        <option value="systems">Systems</option>
                    </optgroup>
                    <optgroup label="Business Analyst">
                        <option value="businessanalyst">Business Analyst</option>
                    </optgroup>
                    
                                    
                </select>
                <select value={experience} onChange={handleExperienceChange}>
                    <option value="0">Experience</option>
                    {[...Array(10)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1} years</option>
                    ))}
                </select>
                <select value={jobTypes} onChange={handleJobTypeChange}>
                    <option value="0">Remote</option>
                    <option value="remote">Remote</option>
                    <option value="hybrid">Hybrid</option>
                    <option value="In-Office">In-Office</option>
                </select>
                <select value={minSalary} onChange={handleMinSalaryChange}>
                    <option value="0">Minimum Base Pay Salary</option>
                    {[...Array(11)].map((_, i) => (
                        <option key={i} value={i * 10}>${i * 10}</option>
                    ))}
                </select>
                <input 
                    type="text" 
                    value={companySearch} 
                    onChange={handleCompanySearchChange} 
                    placeholder="Search for Company" 
                />
            </div>
    );
}

export default Filters;