import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Trash2, Edit3 } from "lucide-react";

interface JournalEntry {
  id: string;
  title: string;
  content: string;
  date: string;
}

export function Journal() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  // Load entries from localStorage on component mount
  useEffect(() => {
    const savedEntries = localStorage.getItem("tarot-journal-entries");
    if (savedEntries) {
      setEntries(JSON.parse(savedEntries));
    }
  }, []);

  // Save entries to localStorage whenever entries change
  useEffect(() => {
    localStorage.setItem("tarot-journal-entries", JSON.stringify(entries));
  }, [entries]);

  const addEntry = () => {
    if (newTitle.trim() && newContent.trim()) {
      const newEntry: JournalEntry = {
        id: Date.now().toString(),
        title: newTitle.trim(),
        content: newContent.trim(),
        date: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      };
      setEntries(prev => [newEntry, ...prev]);
      setNewTitle("");
      setNewContent("");
    }
  };

  const deleteEntry = (id: string) => {
    setEntries(prev => prev.filter(entry => entry.id !== id));
  };

  const startEditing = (entry: JournalEntry) => {
    setEditingId(entry.id);
    setNewTitle(entry.title);
    setNewContent(entry.content);
  };

  const saveEdit = () => {
    if (editingId && newTitle.trim() && newContent.trim()) {
      setEntries(prev => prev.map(entry => 
        entry.id === editingId 
          ? { ...entry, title: newTitle.trim(), content: newContent.trim() }
          : entry
      ));
      setEditingId(null);
      setNewTitle("");
      setNewContent("");
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setNewTitle("");
    setNewContent("");
  };

  return (
    <div className="space-y-6">
      <Card className="bg-card/50 backdrop-blur-sm border-mystical/20">
        <CardHeader>
          <CardTitle className="text-2xl text-mystical">Personal Journal</CardTitle>
          <p className="text-muted-foreground">
            Reflect on your card readings and personal insights
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder="Entry title..."
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="border-mystical/30 focus:border-mystical"
          />
          <Textarea
            placeholder="Write your reflections here..."
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            className="min-h-32 border-mystical/30 focus:border-mystical resize-none"
          />
          <div className="flex gap-2">
            <Button 
              onClick={editingId ? saveEdit : addEntry}
              className="bg-mystical hover:bg-mystical-light text-primary-foreground"
              disabled={!newTitle.trim() || !newContent.trim()}
            >
              {editingId ? "Save Changes" : "Add Entry"}
            </Button>
            {editingId && (
              <Button 
                variant="outline" 
                onClick={cancelEdit}
                className="border-mystical/30 hover:bg-mystical/10"
              >
                Cancel
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {entries.length === 0 ? (
          <Card className="bg-card/30 backdrop-blur-sm border-mystical/10">
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground text-lg">
                No journal entries yet. Start reflecting on your readings!
              </p>
            </CardContent>
          </Card>
        ) : (
          entries.map((entry) => (
            <Card key={entry.id} className="bg-card/50 backdrop-blur-sm border-mystical/20">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-mystical">{entry.title}</h3>
                    <p className="text-sm text-muted-foreground">{entry.date}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => startEditing(entry)}
                      className="text-mystical hover:bg-mystical/10"
                    >
                      <Edit3 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteEntry(entry.id)}
                      className="text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <p className="text-foreground leading-relaxed whitespace-pre-wrap">
                  {entry.content}
                </p>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}