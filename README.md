## Inspiration
We all deal with potholes on a daily basis considering we all need to use the roads of the cities we live in and for sure, we all hate them. Major Californian cities such as San Diego, San Jose, San Francisco and Los Angeles has over **%64** of their roads in mediocre and damages conditions. United States of America is estimated to have approximately **55 million potholes**. A comprehensive study made in 2018 by AAA shows that over the past five years around **16 million drivers** across the States have suffered damage from potholes.

The pervasive potholes in question wreak havoc on drivers' car suspensions and cause a considerable amount of traffic issues. Well, that is a problem we need to fix. 

On average, a little over **3 million drivers** in the US suffer pothole related damage every year. This can be anything, from popping a tire, to bending a rim, to blowing out a shock absorber. The direct financial costs of fixing these damages adds up to nearly **120 billion dollars** for America's drivers. Even worse than a financial annoyance, a pothole can cause various problems and crashes for even the most experienced drivers. Of approximately **33,000 traffic deaths** a year, as many as one third are attributed to poor road conditions like potholes. These losses must be avoidable.

So, what are our options? Can't we just build new roads? Building roads is insanely expensive and they are not the easiest thing to manage in a big, crowded city. Designing better foundations for our roads featuring improved drainage wouldn't decrease the frequency of potholes, on top of that these improved foundations are so much more expensive to build. Maintaining America's large four million mile road system and enabling our level of travel would be a serious burden to have. The American society of civil engineers who know a thing or two about roads, estimates that the cost of maintaining United States' roads properly is between **150 billion** and **200 billion dollars** a year for the next **50 years**. But the States' budget is limited with only **60 billion dollars**. Now I may have only taken math for the humanities in high school, but that seems a few bucks short of what roads need.

## What it does
Raspberry pi records a video footagw while you are driving your car. Then, the recorded video in question will be converted to images. Image classification will decide if image has pothole or not.

## How I built it
Raspberry Pi (or any small computer that can fit in front of car) and camera. When you start your car, the power goes to the raspberry pi and it automatically runs a python script that records the video.

## Challenges I ran into
<img src="https://i.ibb.co/3vq850k/1iruch.jpg" width="200">

Raspberry Pi is compact but not as powerful as needed (at least before raspi4).

## What I learned
- Well, if you do want the pictures of potholes or road disorders ahead, maybe you shouldn't (you definitely shouldn't) put a camera in front of your mom's car.

- Even though image classification is not a hard code to write, it still requires a decent amount of study. 


## What's next for CUBBA
- A decent change of name, it's in Turkish. 
- Better dataset and images
- Object detection
- GPS and stats _a lot of stats_...