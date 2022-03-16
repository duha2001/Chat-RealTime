import { de } from "date-fns/locale";
import React, { useState } from "react";
import { db } from "../firebase/config";

const useFireStore = (collection, condition) => {
  const [documents, setDocuments] = useState([]);
  React.useEffect(() => {
    let collectionRef = db.collection(collection).orderBy("createAt");
    /*
      condition:
      fieldName: 'abc',
      operator:'==',
      compareValue: 'adb'
    */
    if (condition) {
      // Giá trị compareValue cần được kiểm tra vì nó không thể là một mảng trống hay một object trống
      if (!condition.compareValue || !condition.compareValue.length) {
        return;
      }
      collectionRef.where(
        condition.fieldName,
        condition.operator,
        condition.compareValue
      );
    }
    const unsubcribe = collectionRef.onSnapshot((snapshot) => {
      const documents = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setDocuments(documents);
    });
    return unsubcribe;
  }, []);
};

export default useFireStore;
