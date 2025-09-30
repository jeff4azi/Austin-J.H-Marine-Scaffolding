import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient"; // make sure you have this setup
import MessageCard from "../components/MessageCard";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleDelete = async (id) => {
    const { error } = await supabase.from("messages").delete().eq("id", id);

    if (!error) {
      setMessages((prev) => prev.filter((msg) => msg.id !== id));
    } else {
      console.error("Delete failed:", error.message);
    }
  };

  useEffect(() => {
    const fetchMessages = async () => {
      let { data, error } = await supabase
        .from("messages")
        .select("*")
        .order("time", { ascending: false });

      if (error) {
        console.error("Error fetching messages:", error);
      } else {
        setMessages(data);
      }
      setLoading(false);
    };

    fetchMessages();
  }, []);

  return (
    <>
      <h2 className="text-fluid-h2 container mx-5 md:mx-10 pb-10 md:pb-14">
        Messages
      </h2>

      <div className="mx-auto w-full space-y-3 lg:space-y-5 pb-10">
        {loading ? (
          <div className="h-full flex items-center justify-center">
            <p className="text-center">Loading messages...</p>
          </div>
        ) : messages.length === 0 ? (
          <p className="text-center">No messages yet.</p>
        ) : (
          messages.map((msg) => (
            <MessageCard
              key={msg.id}
              onDelete={() => handleDelete(msg.id)}
              email={msg.email}
              name={msg.name}
              time={new Date(msg.time).toLocaleString()} // format timestamp
              message={msg.message}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Messages;
