import React from 'react'
import {
	Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton,
	DrawerBody, DrawerHeader, DrawerFooter, Input, useDisclosure
} from '@chakra-ui/react';


export const Contact = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	return (
		<>
			<Button onClick={onOpen}>Contact Me</Button>
			<Drawer isOpen={isOpen} onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Contact Me </DrawerHeader>

					<DrawerBody>
						<form
							id='my-form'
							onSubmit={(e) => {
								e.preventDefault()
								console.log('submitted')
							}}
						>
							<Input name='nickname' placeholder='Type here...' />
							<Button type='submit' form='my-form'>
								Save
							</Button>
						</form>
					</DrawerBody>

					<DrawerFooter>
						<Button type='submit' form='my-form'>
							Save
						</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	)
}

export default Contact;