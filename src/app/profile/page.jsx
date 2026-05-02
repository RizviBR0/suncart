'use client';

import { authClient } from '@/lib/auth-client';
import { Envelope } from '@gravity-ui/icons';
import { Avatar, Button, Card, Input, Label, Modal, Skeleton, Surface, TextField } from '@heroui/react';
import React from 'react';

const ProfilePage = () => {
    const { data, isPending } = authClient.useSession();
    const user = data?.user;

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const { name, image } = Object.fromEntries(formData.entries());

        await authClient.updateUser({
            name,
            image
        })
    }

    if (isPending) {
        return <div className='flex items-center justify-center'>
            <Skeleton className="h-40 w-40 shrink-0 rounded-full" />
        </div>
    }

    return (
        <div className='flex justify-center items-center'>
            <Card className='w-96 items-center'>
                <Card.Header>
                    <Avatar className='size-40'>
                        <Avatar.Image className='object-cover object-center' alt={user?.name} src={user?.image} />
                        <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
                    </Avatar>
                </Card.Header>

                <Card.Content className='items-center'>
                    <p className='font-semibold text-2xl'>{user?.name}</p>
                    <p className='text-gray-500'>{user?.email}</p>
                </Card.Content>

                <Card.Footer>
                    <Modal>
                        <Button className="bg-black text-white">Update Profile</Button>
                        <Modal.Backdrop>
                            <Modal.Container placement="auto">
                                <Modal.Dialog className="sm:max-w-md">
                                    <Modal.CloseTrigger />
                                    <Modal.Header>
                                        <Modal.Heading>Update Profile</Modal.Heading>
                                    </Modal.Header>
                                    <Modal.Body className='overflow-visible'>
                                        <Surface variant="default">
                                            <form onSubmit={onSubmit} className="flex flex-col gap-4">
                                                <TextField className="w-full" name="name" type="text">
                                                    <Label>Name</Label>
                                                    <Input placeholder="Enter your name" />
                                                </TextField>
                                                <TextField className="w-full" name="image" type="text">
                                                    <Label>Image URL</Label>
                                                    <Input placeholder="Enter image URL" />
                                                </TextField>

                                                <Modal.Footer>
                                                    <Button slot="close" variant="secondary">
                                                        Cancel
                                                    </Button>
                                                    <Button type='submit' slot="close">Save</Button>
                                                </Modal.Footer>
                                            </form>
                                        </Surface>
                                    </Modal.Body>
                                </Modal.Dialog>
                            </Modal.Container>
                        </Modal.Backdrop>
                    </Modal>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default ProfilePage;