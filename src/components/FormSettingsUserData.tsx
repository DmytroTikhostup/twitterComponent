import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Form } from 'react-bootstrap';

interface IFormInput {
    name: string;
    bio: string;
    location: string;
    website: string;
}
export default function FormSettingsUserData() {
    const { control, handleSubmit } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
    };

    return (
        <Form>
            <Form.Group className="mb-3" controlId="inputNameUser">
                {/* <Form.Label>Name</Form.Label> */}
                <Form.Control type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputBioUser">
                {/* <Form.Label>Bio</Form.Label> */}
                <Form.Control as="textarea" rows={2} placeholder="Bio" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputLocationUser">
                <Form.Control type="text" placeholder="Location" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputWebsiteUser">
                <Form.Control type="text" placeholder="Website" />
            </Form.Group>
        </Form>
    );
}
