import CreateCabinForm from "./CreateCabinForm";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CabinTable from "./CabinTable";

export default function AddCabin() {
	return (
		<Modal>
			<Modal.Open opens='cabin-form'>
				<Button>Add new cabin</Button>
			</Modal.Open>
			<Modal.Window name='cabin-form'>
				<CreateCabinForm />
			</Modal.Window>
		</Modal>
	);
}

// export default function AddCabin() {
// 	const [isOpenModel, setIsOpenModel] = useState(false);

// 	return (
// 		<div>
// 			<Button onClick={() => setIsOpenModel((show) => !show)}>
// 				Add new cabin
// 			</Button>
// 			{isOpenModel && (
// 				<Modal onClose={() => setIsOpenModel(false)}>
// 					<CreateCabinForm onCloseModal={() => setIsOpenModel(false)} />
// 				</Modal>
// 			)}
// 		</div>
// 	);
// }
