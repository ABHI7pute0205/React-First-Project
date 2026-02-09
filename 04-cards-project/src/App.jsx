import React from "react";
// this is an external library which we used to used icons
// import { Bookmark } from "lucide-react";
import Card from "./components/Card";

const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      payPerHour: 45,
      location: "Mumbai, India",
    },
    {
      brandLogo:
        "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      payPerHour: 60,
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://static.vecteezy.com/system/resources/previews/055/210/890/non_2x/meta-logo-square-rounded-meta-logo-meta-logo-free-download-free-png.png",
      companyName: "Meta",
      datePosted: "1 week ago",
      post: "React Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      payPerHour: 50,
      location: "Mumbai, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj_mFGAjCi0_8r4Rtf2vW90lhPYm7rdR1RoQ&s",
      companyName: "Apple",
      datePosted: "3 days ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      payPerHour: 70,
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://i.ytimg.com/vi/GV3HUDMQ-F8/maxresdefault.jpg",
      companyName: "Netflix",
      datePosted: "10 days ago",
      post: "UI Engineer",
      tag1: "Part Time",
      tag2: "Senior Level",
      payPerHour: 65,
      location: "Mumbai, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDiQXGMUd-boRykgZmJXW-MG1JD2x8GHwIyw&s",
      companyName: "Microsoft",
      datePosted: "4 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      payPerHour: 55,
      location: "Pune, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/500px-Tesla_logo.png",
      companyName: "Tesla",
      datePosted: "6 days ago",
      post: "Embedded Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      payPerHour: 75,
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYDEXuBIhUSRBG1gfGSw6I6dWZm-GGNCah2g&s",
      companyName: "Adobe",
      datePosted: "8 days ago",
      post: "UI/UX Designer",
      tag1: "Part Time",
      tag2: "Junior Level",
      payPerHour: 40,
      location: "Mumbai, India",
    },
    {
      brandLogo:
        "https://www.salesforce.com/news/wp-content/uploads/sites/3/2024/02/Salesforce-logo.jpg?w=1414&h=796&crop=1",
      companyName: "Salesforce",
      datePosted: "2 days ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      payPerHour: 68,
      location: "Delhi, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVEu8tfOJpA-vMjPqyI2gEyaDjTaI7tSJFzQ&s",
      companyName: "NVIDIA",
      datePosted: "9 days ago",
      post: "AI Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      payPerHour: 80,
      location: "Mumbai, India",
    },
  ];

  // jobOpenings.map(function () {
  //   console.log(jobOpenings);
  // });

  return (
    <div className="parent">
      {/* extract a single single element from the object array , index make a each object unique or provide a index to each object using that we can differenciate each object  || we pass a key beaacse to identify each element uniquely */}
      {jobOpenings.map(function (ele, index) {
        return (
          <div key={index}>
            (
            <Card
              company={ele.companyName}
              post={ele.post}
              tag1={ele.tag1}
              tag2={ele.tag2}
              brandLogo={ele.brandLogo}
              pay={ele.payPerHour}
              datePosted={ele.datePosted}
              location={ele.location}
            />
            );
          </div>
        );
      })}
    </div>
  );
};

export default App;
