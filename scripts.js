console.log("hello world");
// var animals = [{name: 'Aye', description: 'blue', img: },{},{}]

var animals = [{
  name:'Aye Aye',
  description: 'It may look like a possum with amphetamine problem, but it’s an aye-aye.  Aye-ayes spend their lives in rain forest trees and avoid coming down to earth. They are nocturnal, and spend the day curled up in a ball-like nest of leaves and branches. The nests appear as closed spheres with single entry holes, situated in the forks of large trees.',
  img: '<img class="product-image" src="http://cdnimg.in/wp-content/uploads/2015/06/335.jpg?cfaea8">',
  price:500},{
    name:'Little Imp',
    description:'The cottontop tamarin (Saguinus oedipus), also known as the Pinché tamarin, is a small New World monkey weighing less than 1lb (0.5 kg). Train it to get you a beer! It is found in tropical forest edges and secondary forests where it is arboreal and diurnal. In German-speaking areas, the cottontop tamarin is commonly known as "Lisztaffe" (literally "Liszt monkey") most likely due to the resemblance of its hairstyle with that of Hungarian composer and piano virtuoso Franz Liszt.',
    img:'<img class="product-image" src="http://cdnimg.in/wp-content/uploads/2015/06/334.jpg?cfaea8">',
    price:3000},{
      name:'Long Nose Monkey',
      description:'He may look like Jimmy Durante The proboscis monkey is a large species, being one of the largest monkey species native to Asia. Only the Tibetan macaque and a few of the gray langurs can rival its size. Males have a head-body length of 66 to 76.2 cm (26.0 to 30.0 in) and typically weigh 16 to 22.5 kg (35 to 50 lb), with a maximum known weight of 30 kg (66 lb). ',
      img:'<img class="product-image" src="http://cdnimg.in/wp-content/uploads/2015/06/492.jpg?cfaea8">',
      price:5000},{
        name:'Nicobar Bird',
      description:'Want a peacock but you don’t have the room? Try this bird out!! It is a large pigeon, measuring 40 cm (16 in) in length. The head is grey, like the upper neck plumage, which turns into green and copper hackles. The tail is very short and pure white. The rest of its plumage is metallic green. The cere of the dark bill forms a small blackish knob; the strong legs and feet are dull red. The iridies are dark.[2]',
      img:'<img class="product-image" src="http://cdnimg.in/wp-content/uploads/2015/06/471.jpg?cfaea8">',
      price: 6},{
        name:'Slow Loris',
        description: 'Want something cute that could kill ya? The slow loris is a nocturnal primate that has forward-facing eyes and human-like hands with an opposable thumb. They are among the rarest primates on earth. Although slow lorises are seen as slow movers, they frequently ’race walk’ and can move up to 8 km-per night. Equally they are able to remain totally still for hours on end if required. They can live to be 25 years old.The slow loris has a bite so poisonous that its venom can kill. Currently there is no known cure. It is still not clear for what reason the slow loris is venomous.',
        img: '<img class="product-image" src="https://s-media-cache-ak0.pinimg.com/736x/49/09/8f/49098fbc3c9a37fb03034b45e89c5cd4.jpg">',
        price:90}, {
          name:'Toucan',
          description:'Need to find some fruit-loops ? Toucans range in size from 130 g (4.6 oz) and 29 cm (11.5 inches), to 680 g (1.5 lb) and 63 cm (29 inches). Their bodies are short (of comparable size to a crows) and compact. The tail is rounded and varies in length, from half the length to the whole length of the body. The neck is short and thick. The wings are small, as they are forest-dwelling birds who only need to travel short distances, and are often of about the same span as the bill-tip-to-tail-tip measurements of the bird.',
          img: '<img class="product-image" src="http://cdnimg.in/wp-content/uploads/2015/06/526.jpg?cfaea8">',
          price:100},{
            name:'Fennec Fox',
            description:'I’m all ears! The fennec fox is a small nocturnal fox found in the Sahara of North Africa. Its most distinctive feature is its unusually large ears, which also serve to dissipate heat. The fennec is the smallest species of canid. Its coat, ears, and kidney functions have adapted to high-temperature, low-water, desert environments. In addition, its hearing is sensitive enough to hear prey moving underground. It mainly eats insects, small mammals, and birds.',
            img:'<img class="product-image" src="http://3.bp.blogspot.com/-NDV_FhNscKw/UFc50BRHJ2I/AAAAAAAABKM/_OXK3YKibHw/s1600/1.jpg">',
            price:500},{
              name:'Sugar Glider',
              description: 'No, it’s not Rocky the squirrel from the Bullwinkle show. It’s a sugar glider.The sugar glider is a small, omnivorous, arboreal, and nocturnal gliding possum belonging to the marsupial infraclass. The common name refers to its preference for sugary nectarous foods and ability to glide through the air, much like a flying squirrel. They have very similar appearance and habits to the flying squirrel despite not being closely related.',
              img: '<img class="product-image" src="https://pbs.twimg.com/media/CNd03WIUwAAqKHg.jpg:large">',
              price:1000000
            }];


var animalElement = document.getElementById("div0");

function generateAnimals() {
  //var animalElements = document.getElementById('div'+i);

  for (i=0; i < animals.length; i++) {
var animalElements = document.getElementById('div'+i);

    animalElements.innerHTML += '<h2>' + animals[i].name+ '</h2>'
      + '<p>' + animals[i].description+ '</p>'
      + '<p> $' + animals[i].price + '</p>'
      + '<p>' + animals[i].img + '</p>';
  }
}
  generateAnimals();


















