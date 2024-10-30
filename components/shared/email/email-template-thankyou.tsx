interface EmailInterface {
  url: string;
  type: "thankyou" | "me",
  name?: string;
  email?:string;
  subject?:string;
  message?:string;
}

const EmaiTemplateThankYou = ({ url, type, name, subject, email, message }: EmailInterface) => {
  
  return (
    <div
      style={{
        width: "100%",
        height: "auto",
      }}
    >
        {
            type === "thankyou" ? 
            <img
            style={{
              width: "100%",
              height: "auto",
            }}
            src={url}
            alt="Imagen en Base64"
          />
          :
          <ul style={{
            padding:'10px'
          }}>
            <li>Subject: {subject} </li>
            <li>Email: {email}</li>
            <li>Name: {name}</li>
            <li>Message: {message}</li>
          </ul>
        }
    
    </div>
  );
};

export default EmaiTemplateThankYou;
