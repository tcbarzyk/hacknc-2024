import { Heading, List, Box } from "@chakra-ui/react"

const Checklist = () => {
    const before = [
        {
            title: "Make Plans to Stay Safe:",
            elements: [
                "If advised to evacuate, do so immediately",
                "Mobile, manufactured, trailer homes and recreational vehicles are not safe in high winds",
                "Be ready to live without power, water, gas, phone and internet for extended periods",
                "In case of high winds, find a small room with no windows on the lowest level of a sturdy building"
            ]
        },
        {
            title: "Plan to Stay Connected:",
            elements: [
                "Sign up for free emergency alerts from your local government",
                "Monitor local weather and news",
                "Have a backup battery or a way to charge your phone without power",
                "Have a battery-powered radio during a power outage"
            ]
        },
        {
            title: "Gather Emergency Supplies:",
            elements: [
                "Gather food, water, and medicine as stores and pharmacies may be closed",
                "Have backup batteries and chargers for your devices",
                "Have a first aid kit",
                "Flashlights and Whistles can be used to communicate or get help from distances",
                "Stock up on personal hygiene items"
            ]
        },
        {
            title: "Protect your Home:",
            elements: [
                "Secure outdoor items such as furniture or trash cans inside",
                "Trim or remove trees close enough to fall on your home",
                "Protect windows with permanent storm shutters or sheeting",
                "Review insurance policies with your agency"
            ]
        }
    ]

    const during = [
        {
            title: "If Local Authorities Advise you to Evacuate, Go Right Away:",
            elements: [
                "Bring necessary supplies with you such as food, water, and medicine",
                "Follow evacuation routes and do not try to take shortcuts",
                "Check with local officials for shelter locations",
            ]
        },
        {
            title: "Determine your Best Protection for High Winds and Flooding:",
            elements: [
                "Take shelter in a designated storm shelter or an interior room for high winds",
                "Stay away from glass windows and doors",
                "Move to higher ground if flooding is imminent",
            ]
        },
        {
            title: "Turn Around! Don't Drown!",
            elements: [
                "Never walk, swim, or drive through floodwater"
            ]
        }
    ]

    const after = [
        {
            title: "Stay safe:",
            elements: [
                "Wait for officials to say it is safe before going back home",
                "Do not touch floodwaters because they may contain sewage, bacteria, and chemicals that can make you sick",
                "If the power is out, use flashlights or battery-powered lanterns to reduce fire risk",
                "Be aware of carbon monoxide poisoning. If you start to feel sick, dizzy, or weak, get to fresh air right away"
            ]
        },
        {
            title: "Cleanup Safely:",
            elements: [
                "Wear appropriate protective equipment including gloves, googles, and boots",
                "Disinfect everything that got wet",
                "Work with others if possible to protect each other",
            ]
        },
        {
            title: "Stay Healthy:",
            elements: [
                "Throw out food that got wet or warm",
                "Ask your healthcare provider about refrigerated medicines",
                "Hurricanes and flooding can make drinking water unsafe. Monitor your local health department for information about drinking water safety",
            ]
        },
        {
           title: "Take care of yourself:",
            elements: [
                "It is normal to have a lot of bad feelings such as stress or anxiety",
                "Eat healthy food and get enough sleep to help you deal with stress",
                "Work with others if possible to protect each other",
                "You can contact the Disaster Distress Helpline for free at 1-800-985-5990"
            ] 
        }
    ]
    return (
        <>
        <ChecklistSection section={before}/>,
        <ChecklistSection section={during}/>,
        <ChecklistSection section={after}/>
        </>
    )
}

const ChecklistSection = ({section}) => {
    return (
        <div>
            {section.map((section, index) => (
                //used chatgpt to help format a skeleton for the html to iterate through a checklist made of an array of objects
                <div key={index}>
                    <Box padding="3">
                        <Heading textStyle={"3xl"}>{section.title}</Heading>
                            <Box padding="3">
                                <List.Root>
                                {section.elements.map((element, idx) => (
                                <List.Item key={idx}>{element}</List.Item>
                                ))}
                                </List.Root>
                            </Box>
                    </Box>
                </div>
            ))}
        </div>
    )
}

export default Checklist