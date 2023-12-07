import React, { useState } from 'react';
import './file-uploaad-form.css'; // or './FormComponent.css'

function FileUploadForm() {
    // State and handler implementations

    return (
        <div className="form-container">
            <div className="form-column">
                <label>
                    Effective Date:
                    <input type="date" />
                </label>
                <label>
                    Group Number(s):
                    <input type="text" />
                </label>
                <label>
                    In-Network Deductible Max:
                    <input type="number" />
                </label>
                <label>
                    Out-of-Network Deductible Max:
                    <input type="number" />
                </label>
                <label>
                    Requestor Email:
                    <input type="email" />
                </label>
                <label>
                    <input type="checkbox" /> Negative Amount
                </label>
            </div>
            <div className="form-column">
                <label>
                    Select File:
                    <input type="file" />
                </label>
                <label>
                    Drug Vendor:
                    <select>
                        <option value="select">Select</option>
                        <option value="vendor1">Optum</option>
                        <option value="vendor2">Vendor 2</option>
                        <option value="vendor3">Vendor 3</option>
                        <option value="vendor4">Vendor 4</option>
                    </select>
                </label>
                <label>
                    <input type="checkbox" /> Deductible included in OOP
                </label>
                <label>
                    <input type="checkbox" /> Cross apply
                </label>
                <label>
                    <input type="checkbox" /> Lifetime Max
                </label>
                <label>
                    In-Network OOP Max:
                    <input type="number" />
                </label>
                <label>
                    Out-of-Network OOP Max:
                    <input type="number" />
                </label>
                <label>
                    <input type="checkbox" /> Post as N6 Ship
                </label>
            </div>
            <button type="submit">Submit</button>
        </div>
    );
}

export default FileUploadForm;