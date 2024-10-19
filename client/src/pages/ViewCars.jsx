import React from 'react';
import CustomItemList from '../components/CustomItemList'; // import the custom list component

const ViewCars = () => {
    return (
        <div>
            <h2>View Custom Cars</h2>
            <CustomItemList /> {/* Include the custom item list component */}
        </div>
    );
};

export default ViewCars;
