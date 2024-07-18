import { createCharacter } from "@/Infos/models/characterFactory";
// import { testFullEquipments, equipments } from "@/Infos/items/equipments/0equipments";

export default function Home() {
  let Nubun = createCharacter("Nubun");
  console.log(Nubun)
  return (
    <main>
      Home Page
    </main>
  );
}
