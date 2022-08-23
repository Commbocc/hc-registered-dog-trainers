interface Business {
  id: string;
  createdTime: string;
  fields: {
    Name: string;
    IndividualTrainers?: boolean;
    Trainers?: string[];
    Services?: string;
    Phone?: string;
    Location?: string;
  };
}

interface Trainer {
  id: string;
  createdTime: string;
  fields: {
    Name: string;
    Business?: string[];
    Services?: string;
    Phone?: string;
    Location?: string;
  };
}
