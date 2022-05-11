import {useState} from "react";

function useFormData(data) {
    const [formData, setFormData] = useState(data);

    const onChange = (event) => setFormData({...formData, [event.target.name]: event.target.value});

    return {formData, setFormData, onChange};
}

export default useFormData;