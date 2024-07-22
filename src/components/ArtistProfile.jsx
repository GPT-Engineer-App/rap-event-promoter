import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const ArtistProfile = ({ name, bio, imageUrl }) => {
  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center space-x-4">
        <Avatar className="w-16 h-16">
          <AvatarImage src={imageUrl} alt={name} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{bio}</p>
      </CardContent>
    </Card>
  );
};

export default ArtistProfile;