const Contact = require("../modeles/contact")
const creatContact = (contactData)=>{
    const newContact = new Contact(contactData);
    newContact.save()
    console.log("Contact's saved",newContact)
}
//filter
const searchContact=async(name)=>{
    console.log("Collection name:", Contact.collection.collectionName)
    const contact= await Contact.findOne({fullName:name})
    console.log("contact is",contact)
    if(!contact){console.log("Contact not found")
        return null
    }
    console.log("Contact found",contact)
    return contact

}
//delete
const deleteContact=async(name)=>{
    console.log("Collection name:", Contact.collection.collectionName)
    const contact= await Contact.findOneAndDelete({fullName:name})
    console.log("contact is",contact)
    if(!contact){console.log("Contact not found")
        return null
    }
    console.log("Contact is Deleted",contact)
    return contact

}
//update
const updateContact=async(name,newContactData)=>{
    console.log("Collection name:", Contact.collection.collectionName)
    const contact= await Contact.findOneAndUpdate({fullName:name},newContactData,{upsert:true})
    console.log("contact is",contact)
    if(!contact){console.log("Contact not found")
        return null
    }
    console.log("Contact is updated",contact)
    return contact

}

module.exports = {creatContact,searchContact,deleteContact,updateContact}