import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import db from "../config/firebase";

export const getProducts = async () => {
	const collectionRef = collection(db, "products");
	const querySnapshot = await getDocs(collectionRef);
	const cleanedData = querySnapshot.docs.map((rawDocument) => {
		const id = rawDocument.id;
		const restOfData = rawDocument.data();
		return { id, ...restOfData };
	});
	return cleanedData;
};

export const getProductById = async (id) => {
	// Take in the ID
	// Look into our collection
	// Find a specific document
	const docRef = doc(db, "products", id);

	const querySnapshot = await getDoc(docRef);
	// console.log(querySnapshot.exists());

	// If the document does not exist, throw an error
	if (!querySnapshot.exists()) {
		throw new Error(`Product with id ${id} doesn't exist`);
	}
	// Clean this data to make it easier to use in react
	return { id: querySnapshot.id, ...querySnapshot.data() };
};
