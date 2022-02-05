import { useState } from 'react';
import styles from './css/App.module.css' // module css ile çalıştım, bu yüzden styles adıyla modülümü import ettim
import Header from '../Header/Header'; // her componenti ayrı ayrı dosyalara ayırdım, çalışma kolaylığı açısından güzel oluyor
import ListContainer from '../ListContainer/ListContainer';
import Footer from '../Footer/Footer';
import { uid } from 'uid'; // NPM üzerinden uid package'ı ile çalıştım

function App() {
  // listedeki itemleri bir state'e tanımladım ve bu state'i bir obje dizisi yaptım. 
  const [items, setItem] = useState([
    {
      id: uid(), // döngü ile bir liste içerisinde eleman renderlenebilmesi için id gerekiyor ve bu idler unique olmalı, bu yüzden uid package'ı ile unique bir ID oluşturdum
      text: "Taste JavaScript",
      completed: true
    },
    {
      id: uid(),
      text: "Code furiously",
      completed: false
    },
    {
      id: uid(),
      text: "Have a life",
      completed: false
    }
  ]);
  // kullanıcının seçtiği kategoriyi gösteren bir state tanımladım. All, Completed ve Active parametreleriyle işlem yapabiliyor.
  const [category, setCategory] = useState("All");

  // state, vanilla react bazında yerel bir kavram olduğu için başka dosyalardan bu componentteki state'e erişemeyeceğim için
  // yardımcı fonksiyonlar yazdım. addItem bu yardımcı fonksiyonlardan bir tanesi.
  // bir name yani isim parametresi alıyor ve bu parametreye göre yeni bir obje oluşturarak bunu items state'ine ekliyor.
  // state değiştiği için component tekrar renderlanıyor.
  const addItem = name => {
    const newItem = {
      id: uid(), // uid ile benzersiz bir ID oluşturdum
      text: name, // parametre olarak gelen ismi state'in textine assign ettim
      completed: false // ilk oluşturulduğunda complete olmamalı             
    };
    setItem([...items, newItem]); // spread operator ile önceki statei ekleyip sonrasında yeni oluşturduğum objeyi ekledim
  }
  // deleteCompleted tamamlanmış tüm todo itemlerini silmeye yarıyor ve default olarak false parametresi alıyor
  // yani sadece removeItem(name) fonksiyonunu çağırdığınızda o ismi taşıyan eleman silinir
  const removeItem = (name, deleteCompleted = false) => {
    if(!deleteCompleted) setItem(items.filter(item => item.text !== name)); // tekli silme işleminde state arrayini filtreliyoruz ve sadece o ismi taşımayan elemanları yeni arraye assign ediyoruz 
    else setItem(items.filter(item => item.completed === false)); // completedları silmek için ise yine filtreleme işlemi yapıyoruz fakat bu sefer completed değişkeni false olanları yeni arraye assign ediyoruz
  };
  /*
    ! setState immutable olarak kabul edilir. Bu yüzden state içindeki arrayi direkt olarak setState içinde değiştirmemeliyiz.
  */
  const handleComplete = name => {
    const newArr = []; // yeni boş bir array oluşturalım
    items.forEach(item => newArr.push(item));  // items state arrayimizi looplayarak bu yeni boş arrayimize tüm elemanları ekleyelim
    const completeTodo = items.findIndex(item => item.text === name); // tam olarak istediğimiz array elemanının indexini bulalım
    newArr[completeTodo].completed = !newArr[completeTodo].completed; // bu array elemanının completed değişkenini tam tersiyle değiştirelim
    setItem(newArr); // yeni arrayimizi state'imize atayalım ve böylece state üzerindeki arrayi değiştirmeden yeni bir array ile sorunumuzu hallettik
  }
  const setCategoryName = category => setCategory(category); // category parametresi alıyor ve category stateini set ediyor
  const getCategory = () => category; // category stateini return ediyor
  const getItems = category => {
    if(category === "All") return items;
    else if(category === "Active") return items.filter(item => item.completed === false);
    else if(category === "Completed") return items.filter(item => item.completed === true);
    else return console.error("Unknown category type.");
  }; // seçilen kategoriye göre todo listine ait bir array return ediyor

  return (
    <>
      <div className={styles.todoapp}>
        <Header addItem={addItem}/>
        <ListContainer 
          removeItem={removeItem} 
          getItems={getItems} 
          handleComplete={handleComplete} 
          getCategory={getCategory}
          setCategoryName={setCategoryName}
        /> 
      </div>
      <Footer/>
    </>
  ) // tüm fonksiyonları prop olarak diğer componentlere göndererek diğer componentlerde burda deklare ettiğim fonksiyonları kullandım
}

export default App;
