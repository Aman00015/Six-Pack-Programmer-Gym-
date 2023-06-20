import React from "react";
import enter from "../assets/enter.jpeg";
import video from "../assets/cardio.mp4";
import video1 from "../assets/treadmill.mp4";

import { Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
const About = () => {
  return (
    <Stack direction={["column", "row"]} w={"full"}>
      <VStack w={"full"}>
        <Image src={enter} w={"70%"} borderRadius={"full"} />
        <Heading m={"4"}>Six Pack Programmer Gym</Heading>
        <Text
          letterSpacing={"widest"}
          lineHeight={"190%"}
          p={["4", "16"]}
          textAlign={"center"}
        >
          Six Pack Programmer Gym, the ultimate fitness destination designed
          exclusively for programmers. We understand the unique challenges faced
          by those who spend hours behind screens, which is why our gym focuses
          on sculpting not just your code but also your physique. Get ready to
          level up your programming skills and transform your body with our
          specialized workouts and expert guidance. Unleash the power of a
          six-pack and become the ultimate coding machine at Six Pack Programmer
          Gym! <br />
          Established in 2012, Six Pack Programmer Gym has been at the forefront
          of revolutionizing the fitness journey for programmers. We recognized
          the need for a gym that caters specifically to the unique requirements
          of software developers, combining the world of programming and
          physical fitness. With nearly a decade of experience, we are committed
          to helping programmers achieve their fitness goals, boost
          productivity, and unlock their full potential. Join us and experience
          the transformative power of Six Pack Programmer Gym.
        </Text>
        <video
          src={video}
          controls
          controlsList="nodownload"
          style={{
            width: "50%",
            borderRadius: "16px",
            boxShadow:
              " 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.40)",
              outline:"none"
          }}
        ></video>
        <Heading borderBottom={"1px solid white"}>Cardiovascular</Heading>
        <Text
          letterSpacing={"widest"}
          lineHeight={"190%"}
          p={["4", "16"]}
          textAlign={"center"}
        >
          cardio, is a form of physical activity that focuses on increasing your
          heart rate and improving cardiovascular fitness. It involves rhythmic,
          repetitive movements that engage large muscle groups in the body, such
          as the legs, to increase oxygen consumption and energy expenditure.{" "}
          <br />
          Running or walking on a motorized treadmill allows you to control the
          speed and incline, making it suitable for all fitness levels. It
          provides a great cardiovascular workout and can be customized with
          interval training or hill climbs. <br />
          Improved cardiovascular health and endurance Increased calorie burning
          and weight management Enhanced lung function and oxygen utilization
          Reduced risk of heart disease, high blood pressure, and diabetes
          Stress relief and improved mood through the release of endorphins
          Better sleep quality and overall mental well-being
        </Text>
        <video
          src={video1}
          controls
          controlsList="nodownload"
          style={{
            width: "40%",
            borderRadius: "16px",
            boxShadow:
              " 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.40)",
              outline:"none"
          }}
        ></video>
        <Heading borderBottom={"1px solid white"}>Treadmill</Heading>
        <Text
          letterSpacing={"widest"}
          lineHeight={"190%"}
          p={["4", "16"]}
          textAlign={"center"}
        >
          Treadmill exercise is an excellent way to engage in cardiovascular
          exercise. By increasing your heart rate and breathing rate, it helps
          improve your cardiovascular fitness, strengthen the heart muscle, and
          enhance overall endurance. Calorie Burning: Treadmill exercise is an
          effective calorie-burning activity. The number of calories burned
          depends on factors such as speed, incline, and duration of your
          workout. By incorporating interval training or higher-intensity
          workouts, you can maximize calorie expenditure and support weight
          management goals. <br />
          Treadmills offer versatility in terms of workout options. You can
          adjust the speed and incline settings to customize the intensity of
          your exercise. This flexibility allows you to engage in different
          types of workouts, such as steady-state cardio, interval training,
          hill climbs, or simulated outdoor runs. Joint Impact: Treadmills
          provide a cushioned surface that reduces the impact on joints compared
          to running or walking on harder surfaces like pavement. This makes
          treadmill exercise a suitable option for individuals with joint issues
          or those seeking low-impact workouts. <br />
        </Text>
      </VStack>
      <VStack></VStack>
    </Stack>
  );
};

export default About;
