import React from 'react'
import {
	Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton,
	DrawerBody, DrawerHeader, DrawerFooter, Input, useDisclosure,
	FormControl, FormLabel, FormHelperText, Textarea
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
						<FormControl>
							<FormHelperText>Hello, this is  still a work in progress, there is no server yet</FormHelperText>
							<FormControl mt="4" mb="6">
								<FormLabel>Your Name</FormLabel>
								<Input type='name' />
							</FormControl>
							<FormLabel>Email address</FormLabel>
							<Input
								type='email'
							/>
						</FormControl>

						<FormControl mt="4" >
							<FormLabel>Message</FormLabel>
							<Input
								type='message'
								placeholder='What do you want me to know?'
							/>
						</FormControl>
						<Button colorScheme='red' size='sm' variant='ghost'>
							Send
						</Button>
					</DrawerBody>

					<DrawerFooter>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	)
}

export default Contact;