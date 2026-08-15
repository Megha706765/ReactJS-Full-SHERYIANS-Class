import Card from './components/Card'

const App = () => {

 const jobOpenings = [
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.lMlehYqlWlrzobTtzJ6fpAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    name: "Google",
    dataPosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://tse4.mm.bing.net/th/id/OIP.zfy9TgHGk506b1iaij0TSQHaFj?r=0&w=1080&h=810&rs=1&pid=ImgDetMain&o=7&rm=3",
    name: "Microsoft",
    dataPosted: "7 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$40/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.dLl9UyA6y1GTydI-npnoygHaHv?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    name: "Amazon",
    dataPosted: "2 weeks ago",
    post: "SDE I",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$42/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.0Y8Hmr7KiAI_InrwDPpj9wHaHI?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    name: "Meta",
    dataPosted: "3 weeks ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$48/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.L7J7uH7WVGPuFTecNNkjsAHaEK?r=0&w=1920&h=1080&rs=1&pid=ImgDetMain&o=7&rm=3",
    name: "Apple",
    dataPosted: "10 days ago",
    post: "Software Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$46/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://images.crowdspring.com/blog/wp-content/uploads/2016/06/27132348/netflix-new-logo.png",
    name: "Netflix",
    dataPosted: "4 weeks ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$55/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://tse4.mm.bing.net/th/id/OIP.dNyrhKuLBA-1fW28CLjHyQHaEK?r=0&w=680&h=383&rs=1&pid=ImgDetMain&o=7&rm=3",
    name: "NVIDIA",
    dataPosted: "6 days ago",
    post: "AI Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$52/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://tse4.mm.bing.net/th/id/OIP.0JCkpuGN9DSOIAL_Ia0jmwHaE_?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    name: "IBM",
    dataPosted: "2 weeks ago",
    post: "Java Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$35/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://vectorseek.com/wp-content/uploads/2021/01/Adobe-Logo-Vector.jpg",
    name: "Adobe",
    dataPosted: "5 weeks ago",
    post: "Frontend Engineer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$38/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.JHCkZ5LFof4doFY8fOOZEgHaEc?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    name: "Salesforce",
    dataPosted: "10 weeks ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$50/hour",
    location: "Mumbai, India"
  }
];


  return (
    <div className="parent">
      {jobOpenings.map(function(elem){
        return <Card company={elem.name} dataPosted={elem.dataPosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} brandLogo={elem.brandLogo} location={elem.location} />
      })}
    </div>
  )
}

export default App