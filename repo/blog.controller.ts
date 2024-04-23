const collectionname = "blog-collection";
import { firestoreApp } from "@/firebase/firebase";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";

export const saveBlog = async (data: []) => {
  try {
    const uidUnique = crypto.randomUUID();

    const collectionRef = collection(firestoreApp, collectionname);
    const docRef = doc(collectionRef, `blog-id-${uidUnique}`);

    await setDoc(docRef, {
      name: `blog-id-${uidUnique}`,
      blogcontent: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getBlogs = async () => {
  try {
    const collectionRef = collection(firestoreApp, collectionname);

    const docContent = await getDocs(collectionRef);

    return docContent.docs.map((data) => {
      return { ...data.data(), id: data.id };
    });
  } catch (error) {
    console.log(error);
  }
};

export const getBlogId = async (id: string) => {
  try {
    const collectionRef = collection(firestoreApp, collectionname);

    const docRef = doc(collectionRef, id);
    const docContent = await getDoc(docRef);

    return { ...docContent.data(), id: docContent.id };
  } catch (error) {
    console.log(error);
  }
};
