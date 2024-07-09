const Profile = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Profile Page</h1>
      <h1 className="text-2xl font-bold">Profile ID: {params.id}</h1>
    </div>
  );
};

export default Profile;
