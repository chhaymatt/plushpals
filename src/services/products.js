import {
	collection,
	getDocs,
	getDoc,
	doc,
	deleteDoc,
	addDoc,
} from "firebase/firestore";
import db from "../config/firebase";

export const getProducts = async (collectionName) => {
	const collectionRef = collection(db, collectionName);
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

// Delete bagItem by database id
export const deleteBagItemById = async (id) => {
	const docRef = doc(db, "bag", id);
	await deleteDoc(docRef);
};

// Add item to bag

export const addItemToBag = async (data) => {
	// Take in some data from REACT
	const { title, image, quantity, variant, size, productId, price } = data;
	// clean that data
	const newBagItem = { title, image, quantity, variant, size, productId, price };
	// Add that data to our movies collection
	const collectionRef = collection(db, "bag");
	// Use that colleciton reference to add cleaned data to firebase
	const newDoc = await addDoc(collectionRef, newBagItem);

	return newDoc;
};
