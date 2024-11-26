declare namespace Demo {
    interface Task {
        id?: number;
        name?: string;
        description?: string;
        completed?: boolean;
        status?: string;
        comments?: string;
        attachments?: string;
        members?: Member[];
        startDate?: string;
        endDate?: string;
    }
    interface Feature {
        key: string;
        title: string;
        label: string;
        icon: string;
    };
    interface Product {
        key: string;
        title: string;
        image:string
    };
}
