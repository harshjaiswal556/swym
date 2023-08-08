import { useState, useEffect } from "react"
import { auth, firestore, storage } from "./firebase"

export const signup = async (email, pwd) => auth.createUserWithEmailAndPassword(email.trim(), pwd.trim())
export const login = async (email, pwd) => auth.signInWithEmailAndPassword(email.trim(), pwd.trim())
export const logout = () => {
    localStorage.setItem("gfc-user", "")
    return auth.signOut()
}

export const useAuthenticated = () => {
    const [user, setUser] = useState({})
    useEffect(() => {
        auth.onAuthStateChanged(usr => setUser(usr))
    }, [])
    return user
}

export const createForm = formModel => {
    const user = JSON.parse(localStorage.getItem("gfc-user"))
    return firestore.collection("forms").add({ ...formModel, uid: user.uid })
}

export const getForms = async (uid) => {
    const user = JSON.parse(localStorage.getItem("gfc-user"))
    let docs = await firestore.collection("forms").get({
        uid: uid
    })

    // console.log(docs);
    docs = docs.docs
    let forms = docs.map(doc => ({ ...doc.data(), id: doc.id }))
    return forms
}

export const getForm = async (id) => {
    let allforms = await firestore.collection("forms").get()
    allforms = allforms.docs
    const formwewant = allforms.map(form => ({ ...form.data(), id: form.id })).filter(form => form.id === id)[0];
    return formwewant
}

export const deleteForm = async formId => {
    let submissions = await firestore.collection("submissions").where("formId", "==", formId).get()
    submissions = submissions.docs
    for (let submission of submissions) {
        await firestore.collection("submissions").doc(submission.id).delete()
    }
    return firestore.collection("forms").doc(formId).delete()
}

export const uploadFile = (file, fileName) => {
    let ref = storage.ref("files/" + fileName)
    return ref.put(file)
}

export const submitForm = (submission, formId) => firestore.collection("submissions").add({
    submission,
    formId
})

export const getSubmissions = async opts => {
    console.log(opts);
    let docs = await firestore.collection("submissions").get(opts)
    docs = docs.docs
    let submissions = docs.map(doc => ({ ...doc.data(), id: doc.id })).filter(doc => doc.formId === opts.formID)
    console.log(submissions);
    return submissions
}

