import React from "react";
import { Box, Image, Heading, Container, Stack, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.webp";
import img5 from "../assets/img5.webp";
import student from "../assets/student.jpeg";
import group from "../assets/group.jpeg";
import corporate from "../assets/corporate.webp";
const HeadingOptions = {
  pos: "relative",
  left: "50%",
  right: "50%",
  transform: "translate(-50%,-50%)",
  p: "4",
  size: "4xl",
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container minH={"100vh"} maxW={"container.xl"} p={"16"}>
        <Heading
          m={"auto"}
          py={"2"}
          w={"fit-content"}
          borderBottom={"2px solid"}
        >
          Services
        </Heading>

        <Stack
          h={"full"}
          p={"4"}
          alignItems={"center"}
          direction={["column", "row"]}
        >
          <Image src={img5} h={["40", "400"]} borderRadius={"full"} />
          <Text
            letterSpacing={"widest"}
            lineHeight={"190%"}
            p={["4", "16"]}
            textAlign={"center"}
          >
            Treadmills offer convenient and accessible workouts for
            cardiovascular health, weight management, and joint-friendly
            exercise. They provide versatile workout options, progress tracking
            features, and the ability to customize speed and incline levels.
          </Text>
        </Stack>
      </Container>
      <Container minH={"100vh"} maxW={"container.xl"} p={"16"}>
        <Heading
          m={"auto"}
          py={"2"}
          w={"fit-content"}
          borderBottom={"2px solid"}
        >
          Student Offer
        </Heading>

        <Stack
          h={"full"}
          p={"4"}
          alignItems={"center"}
          direction={["column", "row"]}
        >
          <Image src={student} h={["40", "400"]} borderRadius={"full"} />
          <Text
            letterSpacing={"widest"}
            lineHeight={"190%"}
            p={["4", "16"]}
            textAlign={"center"}
          >
            Introducing our exclusive student offer at Six Pack Programmer Gym!
            As a student, we understand the importance of balancing academics
            and fitness. Take advantage of this special deal designed just for
            you. Get access to state-of-the-art facilities, expert trainers, and
            a supportive community to help you achieve your fitness goals. Don't
            let your studies hinder your fitness journey. Join us today and
            unlock your full potential both inside and outside the classroom.
            Elevate your fitness and academic performance with our student offer
            at Six Pack Programmer Gym.
          </Text>
        </Stack>
      </Container>

      <Container minH={"100vh"} maxW={"container.xl"} p={"16"}>
        <Heading
          m={"auto"}
          py={"2"}
          w={"fit-content"}
          borderBottom={"2px solid"}
        >
          Group Fitness Classes
        </Heading>

        <Stack
          h={"full"}
          p={"4"}
          alignItems={"center"}
          direction={["column", "row"]}
        >
          <Image src={group} h={["40", "400"]} borderRadius={"full"} />
          <Text
            letterSpacing={"widest"}
            lineHeight={"190%"}
            p={["4", "16"]}
            textAlign={"center"}
          >
            Variety of Classes: Offer a wide range of classes to cater to
            different fitness levels, preferences, and goals. This may include
            options like cardio-based classes, strength training, dance-based
            workouts, mind-body classes, and more. Expert Instructors: Ensure
            that classes are led by certified instructors who are knowledgeable,
            experienced, and passionate about fitness. Instructors provide
            proper guidance, motivation, and modifications to accommodate
            participants of all fitness levels. <br />
            Fun and Motivating Atmosphere: Create a positive and supportive
            environment that fosters camaraderie and motivation. The group
            setting allows participants to interact, support one another, and
            stay motivated throughout the class.
          </Text>
        </Stack>
      </Container>
      <Container minH={"100vh"} maxW={"container.xl"} p={"16"}>
        <Heading
          m={"auto"}
          py={"2"}
          w={"fit-content"}
          borderBottom={"2px solid"}
        >
          Corporate Wellness Programs
        </Heading>

        <Stack
          h={"full"}
          p={"4"}
          alignItems={"center"}
          direction={["column", "row"]}
        >
          <Image src={corporate} h={["40", "400"]} borderRadius={"full"} />
          <Text
            letterSpacing={"widest"}
            lineHeight={"190%"}
            p={["4", "16"]}
            textAlign={"center"}
          >
            Health Assessments: Conduct health screenings, assessments, and
            surveys to help employees understand their current health status and
            identify areas for improvement. This may include biometric
            screenings, fitness assessments, stress assessments, or lifestyle
            questionnaires. <br />
            Customized Wellness Plans: Develop personalized wellness plans for
            employees based on their health assessments and individual goals.
            Provide recommendations for exercise, nutrition, stress management,
            and overall well-being. Fitness Classes and Gym Memberships: Offer
            on-site fitness classes or subsidize gym memberships to encourage
            employees to engage in regular physical activity. This can include
            yoga classes, group workouts, or access to a fitness facility.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    infiniteLoop
    autoPlay
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h="100vh">
      <Box maxW={["100%", "40%"]} mx="auto">
        <Image src={img1} />
      <Heading bgColor="whiteAlpha.500" color="black" {...HeadingOptions}>
        Best Equiments
      </Heading>
      </Box>
    </Box>
    <Box w="full" h="100vh">
      <Box maxW={["100%", "50%"]} mx="auto">
        <Image src={img2} />
      </Box>
      <Heading bgColor="whiteAlpha.500" color="black" {...HeadingOptions}>
        Rough & Tough Training
      </Heading>
    </Box>
    <Box w="full" h="100vh">
      <Box maxW={["100%", "40%"]} mx="auto">
        <Image src={img3} />
      </Box>
      <Heading bgColor="whiteAlpha.500" color="black" {...HeadingOptions}>
        All Amenities Availabel
      </Heading>
    </Box>
    <Box w="full" h="100vh">
      <Box maxW={["100%", "50%"]} mx="auto">
        <Image src={img4} />
      </Box>
      <Heading bgColor="whiteAlpha.500" color="black" {...HeadingOptions}>
        BasketBall Court
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
