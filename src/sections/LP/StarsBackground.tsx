export default function StarsBackground() {

  const starsSvgDataUri = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>"
    + "<circle cx='10%' cy='20%' r='1' fill='white' opacity='0.6'/>"
    + "<circle cx='30%' cy='15%' r='0.5' fill='white' opacity='0.5'/>"
    + "<circle cx='50%' cy='35%' r='1' fill='white' opacity='0.7'/>"
    + "<circle cx='70%' cy='25%' r='0.5' fill='white' opacity='0.4'/>"
    + "<circle cx='85%' cy='15%' r='1' fill='white' opacity='0.6'/>"
    + "<circle cx='20%' cy='50%' r='0.5' fill='white' opacity='0.5'/>"
    + "<circle cx='45%' cy='60%' r='1' fill='white' opacity='0.7'/>"
    + "<circle cx='65%' cy='55%' r='0.5' fill='white' opacity='0.4'/>"
    + "<circle cx='90%' cy='70%' r='1' fill='white' opacity='0.6'/>"
    + "<circle cx='15%' cy='80%' r='0.5' fill='white' opacity='0.5'/>"
    + "<circle cx='40%' cy='85%' r='1' fill='white' opacity='0.7'/>"
    + "<circle cx='75%' cy='90%' r='0.5' fill='white' opacity='0.4'/>"
    + "<circle cx='5%' cy='5%' r='0.7' fill='white' opacity='0.5'/>"
    + "<circle cx='25%' cy='30%' r='1' fill='white' opacity='0.6'/>"
    + "<circle cx='55%' cy='10%' r='0.5' fill='white' opacity='0.4'/>"
    + "<circle cx='80%' cy='40%' r='1' fill='white' opacity='0.7'/>"
    + "<circle cx='95%' cy='5%' r='0.5' fill='white' opacity='0.5'/>"
    + "<circle cx='10%' cy='65%' r='1' fill='white' opacity='0.6'/>"
    + "<circle cx='35%' cy='75%' r='0.5' fill='white' opacity='0.4'/>"
    + "<circle cx='60%' cy='95%' r='1' fill='white' opacity='0.7'/>"
    + "<circle cx='80%' cy='80%' r='0.5' fill='white' opacity='0.5'/>"
    + "<circle cx='50%' cy='5%' r='0.7' fill='white' opacity='0.6'/>"
    + "<circle cx='90%' cy='30%' r='1' fill='white' opacity='0.5'/>"
    + "<circle cx='5%' cy='90%' r='0.5' fill='white' opacity='0.6'/>"
    + "</svg>";

  return (
    <div 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ backgroundImage: `url("${starsSvgDataUri}")` }}
    ></div>
  );
} 