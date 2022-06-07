import React, { useContext, useState, useEffect } from "react";
import SelectProfileContainer from "./profiles";
import { FirebaseContext } from "../context/firebase";
import { Loading } from "../components";

export default function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const { Firebase } = useContext(FirebaseContext);
  const user = Firebase.auth().currentUser || {};

  useEffect(() => {
    console.log("profile", profile);
    setTimeout(() => {
      setLoading(false);
      // debugger
    }, 3000);
  }, [profile.displayName]);
  return profile ? (
    loading ? (
      <Loading src={user.photoURL} />
    ) : null
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
