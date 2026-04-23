import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import MessageCard from "../components/MessageCard";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleDelete = async (id) => {
    const { error } = await supabase.from("messages").delete().eq("id", id);
    if (!error) setMessages((prev) => prev.filter((msg) => msg.id !== id));
    else console.error("Delete failed:", error.message);
  };

  useEffect(() => {
    const fetchMessages = async () => {
      const { data, error } = await supabase
        .from("messages")
        .select("*")
        .order("time", { ascending: false });
      if (error) console.error("Error fetching messages:", error);
      else setMessages(data);
      setLoading(false);
    };
    fetchMessages();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="size-8 border-2 border-accent border-t-transparent animate-spin rounded-full" />
      </div>
    );
  }

  return (
    <div className="space-y-4 max-w-2xl">
      {/* Stats pill */}
      <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5">
        <span className="size-2 rounded-full bg-accent animate-pulse" />
        <span className="text-accent text-fluid-small font-medium">
          {messages.length} {messages.length === 1 ? "message" : "messages"}
        </span>
      </div>

      {messages.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64 gap-3 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-12 text-gray-600"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M116,128a12,12,0,1,1,12,12A12,12,0,0,1,116,128ZM84,140a12,12,0,1,0-12-12A12,12,0,0,0,84,140Zm88,0a12,12,0,1,0-12-12A12,12,0,0,0,172,140Zm60-76V192a16,16,0,0,1-16,16H83l-32.6,28.16-.09.07A15.89,15.89,0,0,1,40,240a16.13,16.13,0,0,1-6.8-1.52A15.85,15.85,0,0,1,24,224V64A16,16,0,0,1,40,48H216A16,16,0,0,1,232,64Z" />
          </svg>
          <p className="text-gray-500 text-fluid-p">No messages yet</p>
        </div>
      ) : (
        <div className="space-y-3">
          {messages.map((msg) => (
            <MessageCard
              key={msg.id}
              onDelete={() => handleDelete(msg.id)}
              email={msg.email}
              name={msg.name}
              time={new Date(msg.time).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
              message={msg.message}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Messages;
