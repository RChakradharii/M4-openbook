/*//04//
Updating Payment Status (30 marks)
You are enhancing an e-commerce system to include payment status updates. Your task is to create a JavaScript function called updatePaymentStatus that
 updates the payment status of an order based on its ID. Assume each object in the orders array represents an order in the e-commerce system.

Function: updatePaymentStatus(orders, targetOrderId, newStatus)

Input Format:
orders: A list of orders. Each order is an object with these properties:
orderId (number): A unique ID for the order.
city (string): The city where the order is being delivered.
productName (string): The name of the product being ordered.
paymentDetails: An object containing payment information:
method (string): The payment method used (e.g., "Credit Card", "PayPal").
transactionId (string): The ID associated with the payment transaction.
status (string): The current status of the payment (e.g., "Pending", "Success", "Failed").
targetOrderId (number): The ID of the order for which you want to update the payment status.
newStatus (string): The new payment status to apply to the order.

Output Format: The function should directly modify the orders array, by updating the status property within the paymentDetails object of the order 
with the matching targetOrderId, and return the updated orders array.
*/

// function updatePaymentStatus(order,targetorderId,newstatus){
//     const order = order.find(order =>order.orderId === targetorderId);

//     if (order){
//         order.PaymentDetail.Status = newstatus
    
//         return order;
//     }
// }


// const orders = [
//     { orderId: 101, city: "Mumbai", productName: "Laptop", paymentDetails: { method: "Credit Card", transactionId: "tx123", status: "Pending" } },
//     { orderId: 102, city: "Delhi", productName: "Phone", paymentDetails: { method: "PayPal", transactionId: "pay456", status: "Success" } }
//   ];
  
// const orderId = 101;
// const newstatus = "success"


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*//03//
 Finding Orders in a City (30 marks)
You are building an order tracking system for an online store. Your task is to create a JavaScript function called getOrderIdsForCity that
 finds all orders going to a specific city and returns a list of their order IDs.

Function: getOrderIdsForCity(orders, targetCity)

Input Format:
orders: A list of orders. Each order is an object with these properties:
orderId (number): A unique ID for the order.
city (string): The city where the order is being delivered.
productName (string): The name of the product being ordered.
targetCity (string): The city you want to find orders for.

Output Format: Return a new list containing only the orderId values of orders going to the targetCity.
*/

// function getOrderIdsForCity(orders, targetCity) {
    
//     const orderIds = [];

//     for (let order of orders) {

//         if (order.city === targetCity) {
    
//             orderIds.push(order.orderId);
//         }
//     }

    
//     return orderIds;
    
// }


// const orders = [
//     { orderId: 101, city: "Mumbai", productName: "Laptop" },
//     { orderId: 102, city: "Delhi", productName: "Phone" }
// ];
// const targetCity = "Delhi";

// console.log(getOrderIdsForCity(orders, targetCity));


  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /*//01//
   File Type Identifier (20 marks)
You are developing a file organization system and must categorize files based on their extensions.

You need to write a JavaScript function named getFileType that takes a filename as a string and returns a string representing its file type.

Supported File Types:
Document: .doc, .docx, .pdf, .txt
Image: .jpg, .jpeg, .png, .gif
Audio: .mp3, .wav, .ogg, .aac
Video: .mp4, .avi, .mkv, .wmv

Function: getFileType(filename)

Input Format: A string representing a filename (e.g., "document.pdf", "image.jpg").

Output Format:  Return a string representing the file type based on its extension (e.g., "Document", "Image", "Audio", "Video", "Unknown File Type").
*/

// const input = require("readline-sync").question("input:");
// let arr = input;
// let fileType = {
//   Document: ['.doc','.docx','.pdf','.txt'],
//   Image: ['.jpg', '.jpeg', '.png', '.gif'],
//   Audio: ['.mp3', '.wav', '.ogg', '.aac'],
//   Video: ['.mp4','.avi','.mkv','.wmv']

// }



// function getFileType(arr,fileType){

//     let p = arr.indexOf(".");
//     let substr= arr.slice(p,arr.length);
//     let format = "Not found";
    
//     for(let x in fileType){

//         for(let i=0; i < fileType[x].length;i++){
//             if(substr == fileType[x][i]){

//                return format = x;

//             }
//         }

//     }



// }

// console.log(getFileType(arr,fileType));


///////////////////////////////////////////////////////////////////////////////////////////////////////////
/*//02//
Hashtag Extractor (20 marks)
You are building a social media analytics tool and need to extract hashtags from Instagram captions. Each caption is represented as a string, and hashtags are words or phrases prefixed with the "#" symbol.

You need to write a JavaScript function named extractHashtags that takes a string representing an Instagram caption and extracts all hashtags, converting them to lowercase and removing duplicates.

Function: extractHashtags(caption)

Input Format: A string representing an Instagram caption.

Output Format: Return an array of strings, containing all unique lowercase hashtags extracted from the caption.
*/

// const input = require("readline-sync").question("input:");
// let str = input;

// function extractHashtags(str){

//     let  arr = str.split("#");
//     let arr1 = [],j=0;

//     for(let i=1; i<arr.length;i++){
//       arr1[j] = arr[i].toLowerCase();
//       j++;
//     }

    
//     return arr1;

// }

// console.log(extractHashtags(str));
