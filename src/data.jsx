const DATA = [
    {
        email: "admin@admin.com",
        password: "abc123",
        fullname: "Admin",
        type: "Savings Account",
        number: "47290539480",
        balance: 1000,
        isAdmin: true, 
        transactions: []
    },
    {
        email: "ajay@gmail.com",
        password: "abc123",
        fullname: "Ajay Kana",
        type: "Savings Account",
        number: "47290539481",
        balance: 1029300.43,
        isAdmin: true, 
        transactions: []
    },
    {
        email: "deepak@gmail.com",
        password: "abc123",
        fullname: "Deepak V",
        type: "Savings",
        number: "47290539482",
        balance: 392830.22,
        isAdmin: false, 
        budget: [
            {
                title: "Tuition fee",
                amount: 12000
            },
            {
                title: "Food take out during the pandemic",
                amount: 4000
            }
        ], 
        transactions: [
            {
                title: "Fund transfer", 
                amount: 2000,
                type: "debit", 
                date: "October 1, 2021"
            }, 
            {
                title: "Withdraw", 
                amount: 10000, 
                type: "debit",
                date: "October 1, 2021"
            }
        ]
    },
    {
        email: "dhanush@gmail.com",
        password: "abc123",
        fullname: "Dhanush M",
        type: "Savings Account",
        number: "47290539483",
        balance: 102938.34,
        isAdmin: false, 
        transactions: []
    },
    {
        email: "dharani@gmail.com",
        password: "abc123",
        fullname: "Dharanitharan M",
        type: "Current Account",
        number: "47290539484",
        balance: 837495.38, 
        isAdmin: false, 
        transactions: []
    },

    {
        email: "valid@gmail.com",
        password: "abc123",
        fullname: "Valid",
        type: "Current Account",
        number: "47290539485",
        balance: 574839.58, 
        isAdmin: false, 
        transactions: []
    },
    {
        email: "demo@gmail.com",
        password: "abc123",
        fullname: "Demo Account",
        type: "Savings Account",
        number: "47290539486",
        balance: 1000,
        isAdmin: false, 
        transactions: []
    }
];

export default DATA;
