import { Box, Button, ButtonGroup, Center, FormControl, FormLabel, Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { IoPersonCircleSharp } from "react-icons/io5"
import { MdEmail, MdPhone } from "react-icons/md"
import { RiSendPlaneFill } from "react-icons/ri"
import { PaystackButton } from "react-paystack"

const Transferform = () => {
	const publicKey = "pk_test_5be92f6559f3ff1d2fa09b5b0ff27bae5ba9af5e"
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [phone, setPhone] = useState("")
	const [amount, setAmount] = useState("")
	const [show, setShow] = useState(false)

	useEffect(() => {

		if (name.length != 0 && email.length != 0 && phone.length != 0 && amount.length != 0)
			setShow(true)
		else
			setShow(false)
	}, [name, email, phone, amount])

	const componentProps = {

		email,
		amount: amount * 100,
		currency: "GHS",
		metadata: {
			name,
			phone,
		},
		publicKey,
		text: "Send!",

		onSuccess: () => {
			setName("")
			setEmail("")
			setPhone("")
			setAmount("")
			return alert("Thanks for doing business with us! Come back soon!!")
		},

		onClose: () => alert("Wait! You need this oil, don't go!!!!"),

	}


	return (
		<Center>
			<form onSubmit={(e) => e.preventDefault()}>
				<Box boxShadow={"lg"} p={"30px"} rounded={"md"} gap={2} bg={"gray.100"}>
					<FormControl isRequired>
						<InputGroup>
							<InputLeftElement ml={2}>
								<IoPersonCircleSharp color="#800080ad"/>
							</InputLeftElement>
							<Input 
								type="text" 
								placeholder="Name" 
								value={name}
								ml={"10px"}
								border={"0 0 1px 0"}
								color={"gray"}
								focusBorderColor="transparent"
								borderBottomWidth={"thin"}
								borderBottomColor={"purple.100"}
								borderBottomRadius={"none"}
								mb={2}
								onChange={(e)=>setName(e.target.value)}
							/>
						</InputGroup>
					</FormControl>
					<FormControl isRequired>
						<InputGroup>
							<InputLeftElement ml={2}>
								<MdEmail color="#800080ad"/>
							</InputLeftElement>
							<Input 
								type="email" 
								placeholder="Email"
								value={email}
								ml={"10px"}
								border={"0 0 1px 0"}
								color={"gray"}
								focusBorderColor="transparent"
								borderBottomWidth={"thin"}
								borderBottomColor={"purple.100"}
								borderBottomRadius={"none"}
								mb={2}
								onChange={(e)=>setEmail(e.target.value)}
							/>
						</InputGroup>
					</FormControl>
					<FormControl isRequired>
						<InputGroup>
							<InputLeftElement ml={2}>
								<MdPhone color="#800080ad"/>
							</InputLeftElement>
							<Input
								type="tel" 
								value={phone}
								placeholder="Phone number"
								ml={"10px"}
								color={"gray"}
								border={"0 0 1px 0"}
								focusBorderColor="transparent"
								borderBottomWidth={"thin"}
								borderBottomColor={"purple.100"}
								borderBottomRadius={"none"}
								mb={2}
								onChange={(e)=>setPhone(e.target.value)}
							/>
						</InputGroup>
					</FormControl>
					<FormControl isRequired>
						<InputGroup>
							<InputLeftElement
								children="GH₵"
								color={"#800080ad"}
								pl={2}
							/>
							<Input
								placeholder="Amount"
								value={amount}
								ml={"10px"}
								border={"0 0 1px 0"}
								color={"gray"}
								focusBorderColor="transparent"
								borderBottomWidth={"thin"}
								borderBottomColor={"purple.100"}
								borderBottomRadius={"none"}
								mb={5}
								onChange={(e)=>setAmount(e.target.value)}
							/>
						</InputGroup>
					</FormControl>
					<ButtonGroup color={"gray"} alignItems={"center"}>
					{show && <RiSendPlaneFill color="#800080ad"/>}
					{show && <PaystackButton {...componentProps}/>}
					</ButtonGroup>
				</Box>
			</form>
		</Center>
	)
}

export default Transferform
